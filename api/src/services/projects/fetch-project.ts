import { db } from '../knex-connection'

export const fetchProject = async (id: number) => {
  const user = await db('projects')
    .where('id', id)
    .first()

  return user
}
