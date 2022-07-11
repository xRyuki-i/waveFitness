package bin

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	//Database connection string
	dsn := "host=localhost user=postgres password=schema123 dbname=wavefitness port=5432 sslmode=disable"

	// Opening connection to database
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Successfully connected to database!")
	}

	DB = db
}
