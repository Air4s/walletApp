package handlers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"walletapi/backend/models"
)

func CashIn(w http.ResponseWriter, r *http.Request) {

	userId := r.URL.Query().Get("userId")

	if userId == "" {
		http.Error(w, "User ID is required", http.StatusBadRequest)
		return
	}

	// Parse the query parameter
	cashInAmountStr := r.URL.Query().Get("cashInAmount")

	cashInAmount, err := strconv.ParseFloat(cashInAmountStr, 64)
	if err != nil {
		http.Error(w, "Invalid cashInAmount parameter", http.StatusBadRequest)
		return
	}

	user := models.User{}

	newUser, err := user.CashIn(cashInAmount, userId)
	if err != nil {
		http.Error(w, "Error processing cash-in", http.StatusInternalServerError)
		return
	}

	// Respond with a JSON structure
	response := models.GetBalanceResponse{
		Data:    *newUser,
		Message: "Cash-in processed successfully!",
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
