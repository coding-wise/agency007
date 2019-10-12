import { addMemberPivotal } from '../../services/projects/add-member-pivotal'

export const addMemberPivotalHandler = async (req, res) => {
  const response = await addMemberPivotal(req.params.id, req.body)

  return res.status(200).send(response)
}
