import axios from 'axios'

export const addMemberPivotal = async (id, email) => {
  const { data } = await axios({
    method: 'post',
    url: `/projects/${id}/pivotal`,
    data: { email },
  })

  return { data }
}
