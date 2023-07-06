const express = require("express")
const interaction = require("../controllers/interaction_controller")

const router = express.Router()

router.post("/", interaction.create)

module.exports = router
