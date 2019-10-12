import axios from 'axios'

export const getProjects = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/projects',
  })

  return { data }
}
