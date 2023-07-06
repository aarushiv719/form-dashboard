const { default: prisma } = require("../models/prisma")

const redirect = {
	create: async (req, res) => {
		// const {title, description, companyId, jobUrl} = req.body
		// const prisma = require("../models/prisma")

		// const a = await prisma.redirect.create({
		//     data: {
		//         url: url
		//     }
		// })

		res.send("creating redirect")
	},
	get: async (req, res) => {
		const jobId = req.params.jobId
		const job = await prisma.job.findUnique({
			where: {
				id: jobId,
			},
		})

		const redirect = job.joburl

		res.send(JSON.stringify(redirect))
	},
}

module.exports = redirect
