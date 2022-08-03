package bin

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"wavefitness.com/golang/projects/model"
)

var DB *gorm.DB
var user model.User

func Connect() {
	//Database connection string
	dsn := "host=localhost user=postgres password=schema123 dbname=wavefitness port=5432 sslmode=disable"

	// Opening connection to database
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Successfully connected to database!")
	}

	db.Debug().AutoMigrate(&model.Instructor{}, &model.Account{}, &model.Membership{}, &model.User{})

	DB = db
}
