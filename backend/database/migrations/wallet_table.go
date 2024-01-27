package migrations

import (
	"walletapi/backend/database"
)

func init() {
	database.DB.AutoMigrate(&Wallet{})
}

type Wallet struct {
	ID      uint `gorm:"primaryKey"`
	Balance float64
}
