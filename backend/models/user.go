package models

import (
	"errors"
	"walletapi/backend/database"
)

type User struct {
	ID       uint    `gorm:"primaryKey" json:"id"`
	Username string  `gorm:"uniqueIndex" json:"username"`
	Balance  float64 `gorm:"default:0.00" json:"balance"`
}

type GetBalanceResponse struct {
	Message string `json:"message"`
	Data    User   `json:"data"`
}

func (u *User) GetUserBalance() (User, error) {

	var userBalance User

	var queryDB = database.DB

	result := queryDB.Find(&userBalance)

	if result.Error != nil {
		return User{}, result.Error
	}

	return userBalance, nil
}

func (u *User) CashIn(cashInAmount float64, userId string) (*User, error) {

	var queryDB = database.DB
	var accountHolder = u

	err := queryDB.First(accountHolder, userId).Error
	if err != nil {
		return nil, err
	}

	// Update the balance with the cashInAmount
	u.Balance += cashInAmount

	// Save the updated user
	err = queryDB.Save(accountHolder).Error
	if err != nil {
		return nil, err
	}

	return accountHolder, nil
}

func (u *User) Debit(debitAmount float64, userId string) (*User, error) {

	var queryDB = database.DB
	var accountHolder = u

	err := queryDB.First(accountHolder, userId).Error
	if err != nil {
		return nil, err
	}

	// Check if there's sufficient balance
	if accountHolder.Balance < debitAmount {
		return nil, errors.New("Insufficient balance")
	}

	// Update the balance with the debitAmount
	accountHolder.Balance -= debitAmount

	// Save the updated user
	err = queryDB.Save(accountHolder).Error
	if err != nil {
		return nil, err
	}

	return accountHolder, nil
}
