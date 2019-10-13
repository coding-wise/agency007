import { updateProject } from '../../services/projects/update-project'

export const updateProjectHandler = async (req, res) => {
  const { projectName, pivotalId } = req.body
  const { id } = req.params

  updateProject(id, projectName, pivotalId)

  return res.sendStatus(200)
}
