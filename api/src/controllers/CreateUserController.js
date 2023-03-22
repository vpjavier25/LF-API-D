const { createUser } = require("../handlers/CreateUserHandler");

const createUserController = async (req, res) => {
    const { name, lastname, description, email, contraseña, roleid } =
      req.body;
    try {
      const postUser = await createUser(
        email,
        name,
        lastname,
        contraseña,
        description,
        roleid
      );
      res.status(200).json(postUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {createUserController};