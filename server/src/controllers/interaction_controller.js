const interaction = {
	create: (req, res) => {
		const { email, name, jobId } = req.body
		const prisma = require("../models/prisma")

		prisma.applicant
			.findUnique({
				where: {
					email: email,
				},
			})
			.then((applicant) => {
				if (!applicant) {
					prisma.applicant
						.create({
							data: {
								email: email,
								name: name,
							},
						})
						.then((applicant) => {
							prisma.interaction
								.create({
									data: {
										applicantId: parseInt(applicant.id),
										jobId: parseInt(jobId),
									},
								})
								.then((interaction) => {
									res.send("interaction made")
								})
						})
				} else {
					prisma.interaction
						.create({
							data: {
								applicantId: parseInt(applicant.id),
								jobId: parseInt(jobId),
							},
						})
						.then((interaction) => {
							console.log(interaction)
							res.send("interaction made")
						})
				}
			})
	},
	get: (req, res) => {
		const { jobId } = req.body
		const prisma = require("../models/prisma")

		prisma.interaction
			.findMany({
				where: {
					jobId: parseInt(jobId),
				},
				include: {
					applicant: true,
				},
			})
			.then((interactions) => {
				if (!interactions) res.send(JSON.stringify([]))
				res.send(JSON.stringify(interactions))
			})
	},
}

module.exports = interaction
