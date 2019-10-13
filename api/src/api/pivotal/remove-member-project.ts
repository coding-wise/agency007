import * as express from 'express'
import { removeMemberProject } from '../../services/pivotal'

// DELETE /pivotal/projects/{projectId}/memberships/{membershipId}
export const removeMemberProjectHandler = async (req: express.Request, res) => {
  const data = await removeMemberProject(req.params.projectId, req.params.membershipId)

  return res.status(200).send(data)
}
