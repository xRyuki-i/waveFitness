package model

// Model for account
type Account struct {
	Username       string `json:"userName"`
	HashedPassword string `json:"password"`
}
