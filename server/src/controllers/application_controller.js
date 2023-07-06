const application = {
	create: async (req, res) => {
		const { email, name, jobId } = req.body

		const prisma = require("../models/prisma")
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		})

		if (!user) {
			const newUser = await prisma.user.create({
				data: {
					email: email,
					name: name,
				},
			})
		}

		const newApplication = await prisma.application.create({
			data: {
				jobId: jobId,
				userId: newUser.id,
			},
		})

		res.send("Application recieved")
	},
}
