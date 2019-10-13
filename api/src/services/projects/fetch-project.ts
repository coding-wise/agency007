import { db } from '../knex-connection'
import { getAccountMemberships, getProjectMembers } from '../pivotal'

export const fetchProject = async (id: number) => {
  const project = await db('projects')
    .where('id', id)
    .first()

  project.members = {}

  if (project.pivotal) {
    project.members.pivotal = []

    // assuming pivotal can only contain a single id
    for (const pivotalProjectId of project.pivotal) {
      project.members.pivotal.push(...(await getAccountMemberships()))

      const pivotalProjectMembers = await getProjectMembers(pivotalProjectId)

      for (const pivotalProjectMember of pivotalProjectMembers) {
        const index = project.members.pivotal.findIndex(
          (membership) => membership.person.id === pivotalProjectMember.person.id,
        )

        if (index !== -1 && project.members.pivotal[index].person.username !== 'agency007') {
          project.members.pivotal[index] = { ...pivotalProjectMember, selected: true }
        }
      }
    }

    project.members.pivotal.sort((m1, m2) => m1.person.name.localeCompare(m2.person.name))
  }

  return project
}
