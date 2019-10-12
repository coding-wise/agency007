import axios from 'axios'

export const getPivotalProjects = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/projects', // update to the correct route
  })

  return { data }
}
