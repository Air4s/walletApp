package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"walletapi/backend/models"
)

func Debit(w http.ResponseWriter, r *http.Request) {

	userId := r.URL.Query().Get("userId")

	if userId == "" {
		http.Error(w, "User ID is required", http.StatusBadRequest)
		return
	}

	// Parse the query parameter
	debitAmountStr := r.URL.Query().Get("debitAmount")

	debitAmount, err := strconv.ParseFloat(debitAmountStr, 64)
	if err != nil {
		http.Error(w, "Invalid debit amount parameter", http.StatusBadRequest)
		return
	}

	user := models.User{}

	newUser, err := user.Debit(debitAmount, userId)
	if err != nil {
		if err.Error() == "Insufficient balance" {
			http.Error(w, "Insufficient balance", http.StatusBadRequest)
		} else {
			http.Error(w, "Error processing debit", http.StatusInternalServerError)
		}
		return
	}

	// Respond with a JSON structure
	response := models.GetBalanceResponse{
		Data:    *newUser,
		Message: "Debit processed successfully!",
	}

	// Marshal the response into JSON
	responseJSON, err := json.Marshal(response)
	if err != nil {
		http.Error(w, "Error marshaling JSON response", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(responseJSON)
}
