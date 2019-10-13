import * as express from 'express'
import { getProjectMembers } from '../../services/pivotal/get-project-members'

// GET /pivotal/projects/{projectId}/memberships
export const fetchPivotalProjectMembersHandler = async (req: express.Request, res) => {
  const data = await getProjectMembers(req.params.projectId)

  return res.status(200).send(data)
}
