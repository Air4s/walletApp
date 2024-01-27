package database

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

// yourusername = airden / postgres
// yourpassword = root
// yourdatabase = walletdb

func ConnectDB() {
	dsn := "user=postgres password=root dbname=walletdb sslmode=disable port=5440"

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	DB = db
	fmt.Println("Connected to database")
}
