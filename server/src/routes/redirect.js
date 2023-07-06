const express = require("express")
const redirect = require("../controllers/redirect_controller")

const router = express.Router()

router.post("/", redirect.create)

router.get("/", redirect.get)

module.exports = router
