import { fetchProject } from '../../services/projects/fetch-project'

export const fetchProjectHandler = async (req, res) => {
  const projects = await fetchProject(req.params.id)

  return res.status(200).send(projects)
}
