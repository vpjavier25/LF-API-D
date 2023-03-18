const {
  createProject,
  getAllProjects,
  getProjectById,
  createPerson,
} = require("../controllers/Controllers");

function paginateditems(page, limit, items){
  const startIndex = (page-1)*limit;
  const endIndex = page*limit;
  const results = {};
  if(endIndex<items.length){
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
  if(!startIndex && !endIndex){
    return results.results = items;
  }else{
    results.results = items.slice(startIndex,endIndex);
    return results;
  }
}

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
  /* Diseño de url para utlizar la paginacion:
  ejemplo:  http://localhost:3001/projects?page=3&limit=5 
  Se deben declarar page y limit para correcto funcionamiento*/
  const page =  parseInt(req.query.page)   ;
  const limit = req.query.limit;
  try {
    const allProjects = await getAllProjects();
    const paginatedProjects = paginateditems(page,limit,allProjects);

    
    if(paginatedProjects.results.length === 0){
      res.status(400).json({ error: "No hay datos por mostrar." }); 
    }else{
      res.status(200).json(paginatedProjects);  
    }
    
    
    
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
