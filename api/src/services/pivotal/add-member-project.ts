import { provider } from './provider'

export const addMemberProject = (projectId: number, email: string) => {
  return provider.post(`/projects/${projectId}/memberships`, {
    role: 'member',
    email,
  })
}
