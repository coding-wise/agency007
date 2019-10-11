import { provider } from './provider'

const accountId = 1115016

export const getProjects = () => {
  return provider.get(`/projects/?account_ids=${accountId}`)
}
