const { User } = require("../db");

const createUser = async (
  name,
  lastname,
  bankinfo,
  description,
  address,
  phonenumber,
  city
) => {
  const newUser = await User.create({
    name,
    lastname,
    bankinfo,
    description,
    address,
    phonenumber,
    city,
  });

  return {
    id: id,
    name: name,
    lastname: lastname,
    bankinfo: bankinfo,
    description: description,
    address: address,
    phonenumber: phonenumber,
    city: city,
  };
};

module.exports = {createUser};