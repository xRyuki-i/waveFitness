package model

// Model for User
type User struct {
	ID        int    `gorm:"primary_key;" json:"userId"`
	Firstname string `json:"firstName"`
	Lastname  string `json:"lastName"`
	Address   string `json:"address"`
	Contact   string `json:"contact"`
	Status    string `json:"status" gorm:"default: expired"`
}
