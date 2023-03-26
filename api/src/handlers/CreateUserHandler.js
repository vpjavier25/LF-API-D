const { User } = require("../db");
const { genPassword } = require("../authWithJWT/utils")

const createUser = async (
  email,
  name,
  lastname,
  password,
  roleid,
) => {

  const saltHash = genPassword(password);

  const salt = saltHash.salt;
  const hash = saltHash.hash;

  const newUser = await User.create({
    email,
    name,
    lastname,
    hash,
    salt
  });

  //newUser.setRole(roleid);

  return newUser
};

module.exports = { createUser };