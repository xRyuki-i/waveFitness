package api

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"wavefitness.com/golang/projects/bin"
	"wavefitness.com/golang/projects/controller"
	"wavefitness.com/golang/projects/model"
	"wavefitness.com/golang/projects/token"
	"wavefitness.com/golang/projects/util"
	"wavefitness.com/golang/projects/view"
)

var (
	userView       view.UserView             = view.NewUser()
	userController controller.UserController = controller.New(userView)

	accountView       view.AccountView             = view.NewAccount()
	accountController controller.AccountController = controller.NewAccount(accountView)

	instructorView       view.InstructorView             = view.NewInstructor()
	instructorController controller.InstructorController = controller.NewInstructor(instructorView)

	membershipView       view.MembershipView             = view.NewMembership()
	membershipController controller.MembershipController = controller.NewMembership(membershipView)
)

// Server serves HTTP requests of the application backend
type Server struct {
	tokenMaker token.Maker
	router     *gin.Engine
}

// StartServer starts the HTTP server and set up routing
func StartServer() (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker("12345678901234567890123456789012")
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		tokenMaker: tokenMaker,
	}
	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Content-Type,access-control-allow-origin, access-control-allow-headers"},
		AllowCredentials: true,
	}))
	bin.Connect()

	// get requests
	router.GET("/users", DisplayUsers)
	router.GET("/accounts", DisplayAccounts)
	router.GET("/instructors", DisplayInstructors)
	router.GET("/memberships", DisplayMemberships)

	// total requests
	router.GET("/users/total", TotalUser)
	router.GET("/instructors/total", TotalInstructor)
	router.GET("/memberships/total", TotalMembership)

	// post requests
	router.POST("/user", CreateUser)
	router.POST("/account", CreateAccount)
	router.POST("/instructor", CreateInstructor)
	router.POST("/membership", CreateMembership)

	router.POST("account/login", server.loginUser)

	server.router = router
	return server, nil
}

func (server *Server) Start(address string) error {
	// starting the backend
	return server.router.Run(address)
}

func (server *Server) loginUser(ctx *gin.Context) {
	var req model.Account
	if err := ctx.BindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, fmt.Errorf("Couldn't convert to json: %w", err))
		return
	}

	var account model.Account
	bin.DB.Where("username = ?", req.Username).First(&account)

	err := util.CheckPassword(req.HashedPassword, account.HashedPassword)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, model.ErrorResponse{Error: "The username or password you entered is incorrect."})
		return
	}

	accessToken, err := server.tokenMaker.CreateToken(
		account.Username,
		time.Minute,
	)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, fmt.Errorf("%w", err))
		return
	}

	var instructor model.Instructor
	bin.DB.Debug().Where("id = ?", account.InstructorID).First(&instructor)

	rsp := model.LoginResponse{
		AccessToken: accessToken,
		Username:    account.Username,
		Instructor:  instructor,
	}

	ctx.JSON(http.StatusOK, rsp)
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

// View all accounts
func DisplayAccounts(ctx *gin.Context) {
	ctx.JSON(200, accountController.Display())
}

//Create an instructor
func CreateInstructor(ctx *gin.Context) {
	ctx.JSON(200, instructorController.Record(ctx))
}

// View all instructors
func DisplayInstructors(ctx *gin.Context) {
	ctx.JSON(200, instructorController.Display())
}

//Create an membership
func CreateMembership(ctx *gin.Context) {
	ctx.JSON(200, membershipController.Record(ctx))
}

// View all memberships
func DisplayMemberships(ctx *gin.Context) {
	ctx.JSON(200, membershipController.Display())
}

// Total no of users
func TotalUser(ctx *gin.Context) {
	ctx.JSON(200, userController.Total())
}

// Total no of instructors
func TotalInstructor(ctx *gin.Context) {
	ctx.JSON(200, instructorController.Total())
}

// Total no of users
func TotalMembership(ctx *gin.Context) {
	ctx.JSON(200, membershipController.Total())
}
