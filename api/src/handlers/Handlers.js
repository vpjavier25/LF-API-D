const {
  createProject,
  getAllProjects,
  getProjectById,
  createPerson,
} = require("../controllers/Controllers");

const projectsIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const projectById = await getProjectById(id);
    res.status(200).json(projectById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allProjectsController = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  const startIndex = (page-1)*limit;
  const endIndex = page*limit;

  const results = {};
  try {
    const allProjects = await getAllProjects();
    
    if(endIndex<allProjects.length){
      results.next ={
        page: page + 1,
        limit: limit
      }
    }
    if(startIndex>0){
      results.previous={
        page:page - 1,
        limit:limit
      }
    }
    results.results = allProjects.slice(startIndex, endIndex);
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProjectController = async (req, res) => {
  res.status(200).json("se borro un proyecto");
};

const createProjectController = async (req, res) => {
  const {
    id_user,
    name,
    title,
    description,
    image,
    complete,
    deleted,
    location,
    cost,
    currentAmount,
  } = req.body;
  try {
    const postProject = await createProject(
      id_user,
      name,
      title,
      description,
      image,
      complete,
      deleted,
      location,
      cost,
      currentAmount
    );
    res.status(200).json(postProject);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

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
    res.status(200).json(postPerson);
  } catch (error) {
    res.status(200).json({ error: error.message });
  }
};

module.exports = {
  projectsIdController,
  allProjectsController,
  createProjectController,
  deleteProjectController,
  createUserController,
};
