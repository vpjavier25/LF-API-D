const { createUser } = require("../handlers/CreateUserHandler");

const createUserController = async (req, res) => {
    const { name, lastname, bankinfo, description, address, phonenumber, city } =
      req.body;
    try {
      const postUser = await createUser(
        name,
        lastname,
        bankinfo,
        description,
        address,
        phonenumber,
        city
      );
      res.status(201).json(postUser);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  };

  module.exports = {createUserController};