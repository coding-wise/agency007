import { provider } from './provider'

export const getProjectMembers = (projectId: number) => {
  return provider.get(`/projects/${projectId}/memberships`)
}
