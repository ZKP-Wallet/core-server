// defining routes to route request calls to corresponding methods

const userController = require("../controller/user-controller.js")

const router = require("express").Router()

//Route for GET method -- a health check method
router.get("/health", userController.healthCheck)

//Route for POST method -- to save or update device token
router.post("/token", userController.saveOrUpdateToken)

//Route for POST method -- to send push notification
router.post("/notify", userController.sendPushNotify)

router.get("/states", userController.getAllStates)
router.get("/organizations/:stateId", userController.getOrganizationsInState)

module.exports = router
