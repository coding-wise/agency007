import axios from 'axios'

export const getProjects = async () => {
  const { data } = await axios({
    method: 'get',
    url: '/projects',
  })

  console.log('data', data)

  return { data }
}
