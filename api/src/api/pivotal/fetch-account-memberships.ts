import { getAccountMemberships } from '../../services/pivotal'

// GET /pivotal/accounts/###/memberships
export const fetchAccountMembershipsHandler = async (_, res) => {
  const data = await getAccountMemberships()

  return res.status(200).send(data)
}
