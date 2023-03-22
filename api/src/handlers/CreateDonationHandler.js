const { Donation } = require('../db')

const createDonation = async (
    userid,
    projectid,
    monto
)=>{
    const newDonation = await Donation.create({
        monto,
    });


    return newDonation;
}

module.exports = {createDonation}