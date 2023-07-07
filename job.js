const express = require("express")
const job = require("../controllers/job_controller")

const router = express.Router()

router.get("/", (req,res) => {
    res.send(job.get)
})

module.exports = router