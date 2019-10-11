import { provider } from './provider'

export const addMemberProject = async (projectId: number, email: string) => {
  await provider.post(`/projects/${projectId}/memberships`, {
    role: 'member',
    email,
  })
}
