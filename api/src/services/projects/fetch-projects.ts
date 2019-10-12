import { db } from '../knex-connection'

export const fetchProjects = async () => {
  const user = await db('projects')

  return user
}
