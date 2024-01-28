package main

import (
	"fmt"
	"log"
	"net/http"
	"walletapi/backend/database"
	"walletapi/backend/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	database.ConnectDB()

	// Create a new Gin router
	router := gin.Default()

	// Enable CORS for all routes
	router.Use(corsMiddleware())

	// Routes should be grouped
	walletGroup := router.Group("/wallet")

	walletGroup.GET("/balance", wrapHandler(handlers.GetBalance))
	walletGroup.POST("/cash-in", wrapHandler(handlers.CashIn))
	walletGroup.POST("/debit", wrapHandler(handlers.Debit))

	// Start the server
	port := 8080
	fmt.Printf("Server is running on http://localhost:%d\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), router))
}

// Converts a standard http.HandlerFunc to a gin.HandlerFunc
func wrapHandler(handlerFunc http.HandlerFunc) gin.HandlerFunc {
	return func(c *gin.Context) {
		handlerFunc(c.Writer, c.Request)
	}
}

// CORS Middleware
func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
