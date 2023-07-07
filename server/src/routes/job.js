const express = require("express")
const job = require("../controllers/job_controller")

const router = express.Router()

router.get("/:jobId", job.get)
router.post("/:companyId", job.create)
router.post("/company", job.createByName)

module.exports = router
