package main

import (
	"log"

	"wavefitness.com/golang/projects/api"
)

func main() {
	server, err := api.StartServer()
	if err != nil {
		log.Fatal(err)
	}

	err = server.Start(":8080")
	if err != nil {
		log.Fatal("cannot start server:", err)
	}
}
