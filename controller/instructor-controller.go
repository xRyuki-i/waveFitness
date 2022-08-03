package controller

import (
	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/model"
	"wavefitness.com/golang/projects/view"
)

type InstructorController interface {
	Record(ctx *gin.Context) model.Instructor
	Display() []model.Instructor
	Total() model.Count
}

type instructorController struct {
	view view.InstructorView
}

func NewInstructor(view view.InstructorView) InstructorController {
	return &instructorController{
		view: view,
	}
}

func (c *instructorController) Record(ctx *gin.Context) model.Instructor {
	var instructor model.Instructor

	ctx.BindJSON(&instructor)
	bin.DB.Create(&instructor)
	return instructor
}

func (c *instructorController) Display() []model.Instructor {
	instructors := []model.Instructor{}
	bin.DB.Find(&instructors)
	return instructors
}

func (c *instructorController) Total() model.Count {
	instructors := []model.Instructor{}
	result := bin.DB.Find(&instructors)
	res := model.Count{
		Count: result.RowsAffected,
	}
	return res
}
