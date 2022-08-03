package model

type Membership struct {
	ID             int    `gorm:"primary_key;" json:"membershipId"`
	MembershipType string `json:"type"`
	Duration       string `json:"duration"`
	Price          string `json:"price"`
}
