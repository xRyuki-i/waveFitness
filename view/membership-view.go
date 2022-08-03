package view

import "wavefitness.com/golang/projects/model"

type MembershipView interface {
	Record(model.Membership) model.Membership
	Display() []model.Membership
}

type membershipView struct {
	memberships []model.Membership
}

func NewMembership() MembershipView {
	return &membershipView{}
}

func (view *membershipView) Record(membership model.Membership) model.Membership {
	view.memberships = append(view.memberships, membership)
	return membership
}

func (view *membershipView) Display() []model.Membership {
	return view.memberships
}
