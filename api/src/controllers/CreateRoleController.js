const {createRole} = require('../handlers/CreateRoleHandler')

const CreateRoleController = async (req,res) =>{
    const {name} = req.body;
    try {
        const postRole = await createRole(
            name
        );

        res.status(200).json(postRole);
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
};

module.exports = {CreateRoleController}