const express = require("express")
const application = require("../controllers/application_controller")

const router = express.Router()

router.post("/", application.create)

module.exports = router
