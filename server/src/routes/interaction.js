const express = require("express")
const interaction = require("../controllers/interaction_controller")

const router = express.Router()

router.post("/", interaction.create)
router.get("/", interaction.get)

module.exports = router
