package controller

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/model"
	"wavefitness.com/golang/projects/util"
	"wavefitness.com/golang/projects/view"
)

type AccountController interface {
	Record(ctx *gin.Context) model.Account
	Display() []model.Account
}

type accountController struct {
	view view.AccountView
}

func NewAccount(view view.AccountView) AccountController {
	return &accountController{
		view: view,
	}
}

func (c *accountController) Record(ctx *gin.Context) model.Account {
	var account model.Account
	var err error
	ctx.BindJSON(&account)
	account.HashedPassword, err = util.HashPassword(account.HashedPassword)
	if err != nil {
		fmt.Print("password not hashed")
	}
	// bin.DB.Create(&account)
	bin.DB.Debug().Create(&account)
	return account
}

func (c *accountController) Display() []model.Account {
	accounts := []model.Account{}
	// bin.DB.Find(&accounts)
	err := bin.DB.Preload("Instructor").Find(&accounts).Error
	if err != nil {
		panic("cannot retrieve user")
	}

	return accounts
}
