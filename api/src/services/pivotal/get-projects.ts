import { config } from '../../config'
import { provider } from './provider'

export const getProjects = async () => {
  const { data } = await provider.get(`/projects/?account_ids=${config.integrations.pivotal.accountId}`)

  return data
}
