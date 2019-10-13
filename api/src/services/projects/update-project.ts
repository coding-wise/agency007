import { db } from '../knex-connection'

export const updateProject = async (projectId: string | number, projectName: string, pivotalId: number) => {
  await db('projects')
    .update({ name: projectName, pivotal: JSON.stringify([pivotalId]) })
    .where({ id: projectId })
}
