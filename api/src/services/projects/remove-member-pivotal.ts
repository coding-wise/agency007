import { db } from '../knex-connection'
import { removeMemberProject } from '../pivotal'

export const removeMemberPivotal = async (id: number, membershipId: number) => {
  const project = await db('projects')
    .where('id', id)
    .first()

  return removeMemberProject(project.pivotal[0], membershipId)
}
