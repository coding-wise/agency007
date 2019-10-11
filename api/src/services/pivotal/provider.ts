import axios from 'axios'

import { config } from '../../config'

export const provider = axios.create({
  baseURL: config.integrations.pivotal.url,
  headers: {
    'X-TrackerToken': config.integrations.pivotal.token,
  },
})
