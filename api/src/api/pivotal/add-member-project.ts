import * as express from 'express'
import { addMemberProject } from '../../services/pivotal'

// POST /pivotal/projects/{projectId}/memberships
// { "email": "" }
export const addMemberProjectHandler = async (req: express.Request, res) => {
  const data = await addMemberProject(req.params.projectId, req.body.email)

  return res.status(200).send(data)
}
