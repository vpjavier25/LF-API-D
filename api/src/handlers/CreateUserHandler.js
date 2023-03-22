const { User } = require("../db");

const createUser = async (
  email,
  name,
  lastname,
  contraseña,
  description,
  roleid
) => {
  const newUser = await User.create({
    email,
    name,
    lastname,
    contraseña,
    description
  });

  newUser.setRole(roleid);

  return newUser
};

module.exports = {createUser};