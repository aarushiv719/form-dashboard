const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
	res.send("We running.")
})

app.listen(5000, () => {
	console.log("Server listening on port 5000")
})
