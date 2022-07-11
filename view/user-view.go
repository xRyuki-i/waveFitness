package view

import "wavefitness.com/golang/projects/model"

type UserView interface {
	Record(model.User) model.User
	Display() []model.User
}

type userView struct {
	users []model.User
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
