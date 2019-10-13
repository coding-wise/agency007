import { updateProject } from '../../services/projects/update-project'

export const updateProjectHandler = async (req, res) => {
  const { projectId, projectName, pivotalId } = req.body
  updateProject(projectId, projectName, pivotalId)

  return res.sendStatus(200)
}
