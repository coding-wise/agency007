import { addProject } from '../../services/projects/add-project'

export const addProjectHandler = async (req, res) => {
  const { projectName, pivotalId } = req.body
  addProject(projectName, pivotalId)

  return res.sendStatus(200)
}
