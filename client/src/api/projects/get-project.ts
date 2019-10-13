import axios from 'axios'

export const getProject = async (id) => {
  const { data } = await axios({
    method: 'get',
    url: `/projects/${id}`,
  })

  return { data }
}
