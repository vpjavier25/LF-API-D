const { getAllProjects, } = require("../handlers/getAllProjectsHandler")
const { paginateditems } = require("../handlers/PaginationHandler")

const allProjectsController = async (req, res) => {
  const { completed, location, name, limit } = req.query
  const page = parseInt(req.query.page)
  try {
    const allProjects = await getAllProjects(completed, location, name);
    const paginatedProjects = paginateditems(page, limit, allProjects);
    res.status(200).json(paginatedProjects);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { allProjectsController };