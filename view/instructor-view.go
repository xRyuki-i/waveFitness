package view

import "wavefitness.com/golang/projects/model"

type InstructorView interface {
	Record(model.Instructor) model.Instructor
	Display() []model.Instructor
}

type instructorView struct {
	instructors []model.Instructor
}

// type UserResponse struct {
// 	Firstname  string `json:"firstName"`
// 	Lastname   string `json:"lastName"`
// 	Address    string `json:"address"`
// 	Contact    string `json:"contact"`
// 	Membership string `json:"membership" default:"expired"`
// }

func NewInstructor() InstructorView {
	return &instructorView{}
}

func (view *instructorView) Record(instructor model.Instructor) model.Instructor {
	view.instructors = append(view.instructors, instructor)
	return instructor
}

func (view *instructorView) Display() []model.Instructor {
	return view.instructors
}

// func NewUserResponse(user model.User) UserResponse {
// 	return UserResponse{
// 		Firstname:  user.Firstname,
// 		Lastname:   user.Lastname,
// 		Address:    user.Address,
// 		Contact:    user.Contact,
// 		Membership: user.Membership,
// 	}
// }
