import { removeMemberPivotal } from '../../services/projects/remove-member-pivotal'

export const removeMemberPivotalHandler = async (req, res) => {
  const response = await removeMemberPivotal(+req.params.id, +req.params.membershipId)

  return res.status(200).send(response)
}
