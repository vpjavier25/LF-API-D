const { createAdmin } = require("../handlers/CreateAdminHandler");

const createAdminController = async (req,res) =>{
    const {
        name,
        lastname,
        description,
        email,
        password,
        roleid
    } = req.body;

    try {
        const postAdmin = await createAdmin(
            email,
            name,
            lastname,
            password,
            description,
            roleid
        );
        res.status(200).json(postAdmin)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {createAdminController}