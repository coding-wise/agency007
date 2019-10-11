import * as React from 'react'
import { Redirect } from 'react-router-dom'
import '../../config'
import { routePaths } from '../route-paths'
import './home.scss'

const Home = () => {
  const hasToken = !!localStorage.getItem('token')

  if (hasToken) {
    return <Redirect to={routePaths.private.pending} />
  }

  return <Redirect to={routePaths.login} />
}

export { Home }
