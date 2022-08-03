package controller

import (
	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/model"
	"wavefitness.com/golang/projects/view"
)

type MembershipController interface {
	Record(ctx *gin.Context) model.Membership
	Display() []model.Membership
	Total() model.Count
}

type membershipController struct {
	view view.MembershipView
}

func NewMembership(view view.MembershipView) MembershipController {
	return &membershipController{
		view: view,
	}
}

func (c *membershipController) Record(ctx *gin.Context) model.Membership {
	var membership model.Membership

	ctx.BindJSON(&membership)
	bin.DB.Create(&membership)
	return membership
}

func (c *membershipController) Display() []model.Membership {
	memberships := []model.Membership{}
	bin.DB.Find(&memberships)
	return memberships
}

func (c *membershipController) Total() model.Count {
	memberships := []model.Membership{}
	result := bin.DB.Find(&memberships)
	res := model.Count{
		Count: result.RowsAffected,
	}
	return res
}
