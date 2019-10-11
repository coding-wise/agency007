import { config } from '../../config'
import { provider } from './provider'

export const getAccountMemberships = async () => {
  const { data } = await provider.get(`accounts/${config.integrations.pivotal.accountId}/memberships`)

  return data
}
