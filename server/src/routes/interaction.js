const express = require("express")
const interaction = require("../controllers/interaction_controller")

const router = express.Router()

router.get("/", (req, res) => {
	res.send("test")
})
router.post("/", interaction.create)

module.exports = router
