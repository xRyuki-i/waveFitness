package main

import (
	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/controller"
	"wavefitness.com/golang/projects/view"
)

var (
	userView       view.UserView             = view.NewUser()
	userController controller.UserController = controller.New(userView)

	accountView       view.AccountView             = view.NewAccount()
	accountController controller.AccountController = controller.NewAccount(accountView)
)

func main() {
	router := gin.Default()
	bin.Connect()

	// get requests
	router.GET("/users", DisplayUsers)

	// post requests
	router.POST("/user", CreateUser)
	router.POST("/account", CreateAccount)

	// starting the backend
	router.Run(":8080")
}

// Display all the recorded users
func DisplayUsers(ctx *gin.Context) {
	ctx.JSON(200, userController.Display())
}

// Create a new user to record
func CreateUser(ctx *gin.Context) {
	ctx.JSON(200, userController.Record(ctx))
}

// Create an account
func CreateAccount(ctx *gin.Context) {
	ctx.JSON(200, accountController.Record(ctx))
}
