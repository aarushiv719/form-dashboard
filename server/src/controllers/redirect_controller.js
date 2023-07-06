const redirect = {
	create: (req, res) => {
		res.send("creating redirect")
	},
	get: (req, res) => {
		res.send("sending redirect")
	},
}

module.exports = redirect
