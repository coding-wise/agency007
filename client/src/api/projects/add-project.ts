import axios from 'axios'

export const addProject = async (project) => {
  const { data } = await axios({
    method: 'post',
    url: `/projects`,
    data: project,
  })

  return { data }
}
