const job = {
	get: (req, res) => {
		const prisma = require("../models/prisma");
		const { jobId } = req.params;

		prisma.job
			.findUnique({
				where: {
					id: parseInt(jobId),
				},
			})
			.then((job) => {
				if (!job) {
					res.send("Job doesn't exist");
				} else {
					prisma.company
						.findUnique({
							where: {
								id: parseInt(job.companyId),
							},
						})
						.then((company) => {
							job.company = company;
							res.send(JSON.stringify(job));
						});
				}
				job;
			});
	},
	create: (req, res) => {
		const { title, description, companyId, jobUrl } = req.body;
		const prisma = require("../models/prisma");

		prisma.job.get;

		prisma.job
			.create({
				data: {
					title: title,
					description: description,
					companyId: parseInt(companyId),
					jobUrl: jobUrl,
				},
			})
			.then((job) => {
				res.send(JSON.stringify(job));
			});
	},
};
module.exports = job;
