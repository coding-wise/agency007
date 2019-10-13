import { fetchProject } from '../../services/projects'
import { addMemberPivotal } from '../../services/projects/add-member-pivotal'

export const addMemberPivotalHandler = async (req, res) => {
  await addMemberPivotal(req.params.id, req.body)

  const project = await fetchProject(req.params.id)

  return res.status(200).send(project)
}
