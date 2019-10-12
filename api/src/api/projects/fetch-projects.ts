import { fetchProjects } from '../../services/projects/fetch-projects'

export const fetchProjectsHandler = async (_, res) => {
  const projects = await fetchProjects()

  return res.status(200).send(projects)
}
