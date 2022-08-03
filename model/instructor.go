package model

type Instructor struct {
	ID             int    `gorm:"primary_key;" json:"instructorId"`
	Firstname      string `json:"firstName"`
	Lastname       string `json:"lastName"`
	Address        string `json:"address"`
	Contact        string `json:"contact"`
	InstructorType string `json:"type"`
}
