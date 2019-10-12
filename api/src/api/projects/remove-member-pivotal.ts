import { fetchProject } from '../../services/projects'
import { removeMemberPivotal } from '../../services/projects/remove-member-pivotal'

export const removeMemberPivotalHandler = async (req, res) => {
  await removeMemberPivotal(+req.params.id, +req.params.membershipId)

  const project = await fetchProject(req.params.id)

  return res.status(200).send(project)
}
