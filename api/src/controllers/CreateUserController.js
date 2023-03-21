const createUserController = async (req, res) => {
    const { name, lastname, bankinfo, description, address, phonenumber, city } =
      req.body;
    try {
      const postPerson = await createPerson(
        name,
        lastname,
        bankinfo,
        description,
        address,
        phonenumber,
        city
      );
      res.status(201).json(postPerson);
    } catch (error) {
      res.status(200).json({ error: error.message });
    }
  };

  module.exports = {createUserController};