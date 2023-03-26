const { createUser } = require("../handlers/CreateUserHandler");

const createUserController = async (req, res) => {
    const { name, lastname, email, password, roleid } =
      req.body;
    try {
      const postUser = await createUser(
        email,
        name,
        lastname,
        password,
        roleid,
      );
      res.status(200).json(postUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {createUserController};