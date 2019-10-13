import axios from 'axios'

export const getPivotalProjects = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/pivotal/projects',
  })

  return { data }
}
