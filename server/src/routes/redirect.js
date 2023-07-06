const express = require("express")

const router = express.Router()

router.post("/", (req, res) => {
	res.send("creating redirect")
})

router.get("/", (req, res) => {
	res.send("sending redirect")
})

module.exports = router
