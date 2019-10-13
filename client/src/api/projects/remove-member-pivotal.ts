import axios from 'axios'

export const removeMemberPivotal = async (id, membershipId) => {
  const { data } = await axios({
    method: 'delete',
    url: `/projects/${id}/pivotal/${membershipId}`,
  })

  return { data }
}
