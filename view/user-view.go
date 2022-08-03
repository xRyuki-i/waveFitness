package view

import "wavefitness.com/golang/projects/model"

type UserView interface {
	Record(model.User) model.User
	Display() []model.User
}

type userView struct {
	users []model.User
}

type UserResponse struct {
	Firstname  string `json:"firstName"`
	Lastname   string `json:"lastName"`
	Address    string `json:"address"`
	Contact    string `json:"contact"`
	Membership string `json:"status" default:"expired"`
}

func NewUser() UserView {
	return &userView{}
}

func (view *userView) Record(user model.User) model.User {
	view.users = append(view.users, user)
	return user
}

func (view *userView) Display() []model.User {
	return view.users
}

func NewUserResponse(user model.User) UserResponse {
	return UserResponse{
		Firstname:  user.Firstname,
		Lastname:   user.Lastname,
		Address:    user.Address,
		Contact:    user.Contact,
		Membership: user.Status,
	}
}
