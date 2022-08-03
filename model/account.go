package model

// Model for account
type Account struct {
	ID             int        `json:"accountId"`
	Username       string     `json:"username"`
	HashedPassword string     `json:"password"`
	InstructorID   int        `json:"instructorId"`
	Instructor     Instructor `gorm:"foreign_key: InstructorID; references:ID"`
}

// Login Response
type LoginResponse struct {
	AccessToken string     `json:"access_token"`
	Username    string     `json:"username"`
	Instructor  Instructor `json:"instructor"`
}

type ErrorResponse struct {
	Error string `json:"error"`
}

type Count struct {
	Count int64 `json:"count"`
}
