import { db } from '../knex-connection'
import { addMemberProject } from '../pivotal'

export const addMemberPivotal = async (id: number, { email }: { email: string }) => {
  const project = await db('projects')
    .where('id', id)
    .first()

  return addMemberProject(project.pivotal[0], email)
}
