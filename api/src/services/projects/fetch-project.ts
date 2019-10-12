import { db } from '../knex-connection'
import { getProjectMembers } from '../pivotal'

export const fetchProject = async (id: number) => {
  const project = await db('projects')
    .where('id', id)
    .first()

  project.members = {}

  if (project.pivotal) {
    project.members.pivotal = []

    for (const pivotalProjectId of project.pivotal) {
      project.members.pivotal.push(...(await getProjectMembers(pivotalProjectId)))
    }
  }

  return project
}
