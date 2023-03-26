const { Role } = require("../db");

const createRole = async(
    name
)=>{
    const newRole = await Role.create({
        name
    });

    return newRole;
}

module.exports = {createRole};