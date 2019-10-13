import axios from 'axios'

export const updateProject = async (project) => {
  const { data } = await axios({
    method: 'put',
    url: `/projects/${project.id}`,
    data: project,
  })

  return { data }
}
