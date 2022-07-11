package view

import "wavefitness.com/golang/projects/model"

type AccountView interface {
	Record(model.Account) model.Account
	Display() []model.Account
}

type accountView struct {
	accounts []model.Account
}

func NewAccount() AccountView {
	return &accountView{}
}

func (view *accountView) Record(account model.Account) model.Account {
	view.accounts = append(view.accounts, account)
	return account
}

func (view *accountView) Display() []model.Account {
	return view.accounts
}
