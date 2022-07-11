package controller

import (
	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/model"
	"wavefitness.com/golang/projects/view"
)

type UserController interface {
	Record(ctx *gin.Context) model.User
	Display() []model.User
}

type controller struct {
	view view.UserView
}

func New(view view.UserView) UserController {
	return &controller{
		view: view,
	}
}

func (c *controller) Record(ctx *gin.Context) model.User {
	var user model.User
	ctx.BindJSON(&user)
	bin.DB.Create(&user)
	return user
}

func (c *controller) Display() []model.User {
	users := []model.User{}
	bin.DB.Find(&users)
	return users
}
