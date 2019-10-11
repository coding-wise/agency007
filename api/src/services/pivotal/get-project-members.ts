import { provider } from './provider'

export const getProjectMembers = async (projectId: number) => {
  const { data } = await provider.get(`/projects/${projectId}/memberships`)

  return data
}
