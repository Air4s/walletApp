package handlers

import (
	"encoding/json"
	"net/http"
	"walletapi/backend/models"
)

func GetBalance(w http.ResponseWriter, r *http.Request) {

	var user models.User

	userBalance, err := user.GetUserBalance()
	if err != nil {
		http.Error(w, "Error retrieving user balance", http.StatusInternalServerError)
		return
	}

	// Respond with a JSON structure
	response := models.GetBalanceResponse{
		Data:    userBalance,
		Message: "Data fetched successfully!",
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
