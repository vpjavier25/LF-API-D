const {Admin} = require('../db')
const createAdmin = async (
    email,
    name,
    lastname,
    password,
    description,
    roleid
)=>{
    const newAdmin = await Admin.create({
        email,
        name,
        lastname,
        password,
        description,
    });

    newAdmin.setRole(roleid);

    return newAdmin
};

module.exports = {createAdmin}