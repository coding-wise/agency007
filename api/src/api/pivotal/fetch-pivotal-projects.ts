import { getProjects } from '../../services/pivotal/get-projects'

// GET /pivotal/projects
export const fetchPivotalProjectsHandler = async (_, res) => {
  const data = await getProjects()

  return res.status(200).send(data)
}
