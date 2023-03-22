const { createDonation } = require("../handlers/CreateDonationHandler")

const createDonationController = async (req,res) =>{
    const {
        monto,
        userid,
        projectid
    }= req.body

    try {
        const postDonation = await createDonation(
            monto,
            userid,
            projectid
        )
        res.status(200).json(postDonation)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createDonationController}