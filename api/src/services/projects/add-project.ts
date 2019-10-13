import { db } from '../knex-connection'

export const addProject = async (projectName: string, pivotalId: number) => {
  const projectId = await db('projects')
    .insert({ name: projectName, pivotal: { id: pivotalId } })
    .returning('id')

  return projectId
}
