const job = {
get: (req,res) => {
    const prisma = require("../models/prisma")
    const {jobId} = req.body

    prisma.job.findUnique({
        where: {
            companyId: jobId 
        },
    })
    .then((job) => {
        if(!job) res.send("Job doesn't exist")
        else if (job) res.send("jpbbbb")
    })}
}
module.export = job