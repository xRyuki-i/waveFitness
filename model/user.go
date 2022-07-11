package model

// Model for User
type User struct {
	Firstname  string `json:"firstName"`
	Lastname   string `json:"lastName"`
	Address    string `json:"address"`
	Contact    string `json:"contact"`
	Membership string `json:"membership" default:"expired"`
}
