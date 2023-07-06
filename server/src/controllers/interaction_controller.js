const interaction = {
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

		const newInteraction = await prisma.interaction.create({
			data: {
				jobId: jobId,
				userId: newUser.id,
			},
		})

		res.send("Interaction recieved")
	},
}

module.exports = interaction
