const { Donation, User, Project } = require('../db')
const { where } = require('sequelize')

const createDonation = async (
    monto,
    userid,
    projectid,
    
)=>{
    try {
        let usuariodonador = await User.findOne({
            where:{
                id: userid
            }
        });

        let projectdonado = await Project.findOne({
            where:{
                id:projectid
            }
        })

        
        return projectdonado.addUser(usuariodonador, {through: { monto: monto}});
    } catch (error) {
        return {erro: error.message}
    }
}

module.exports = {createDonation}