import * as React from 'react'
import { Switch } from 'react-router-dom'
import { Connect } from './connect/Connect'
import { Login } from './connect/Login'
import { Home } from './home/Home'
import { Projects } from './projects/Projects'
import { PendingApproval } from './protected-routes/pending-approval/PendingApproval'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { routePaths } from './route-paths'
import { User } from './user/User'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={routePaths.root} component={Home} />
      <PublicRoute exact path={'/projects'} component={Projects} />
      <PublicRoute exact path={routePaths.login} component={Login} />
      <PublicRoute exact path={routePaths.connect} component={Connect} />
      <ProtectedRoute exact path={routePaths.private.root} component={User} />
      <ProtectedRoute exact path={routePaths.private.pending} component={PendingApproval} />
    </Switch>
  )
}

export { Routes }
