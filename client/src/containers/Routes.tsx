import * as React from 'react'
import { Switch } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute'
import { PublicRoute } from './PublicRoute'
import { Connect } from './connect/Connect'
import { Login } from './connect/Login'
import { Home } from './home/Home'
import { PendingApproval } from './protected-routes/pending-approval/PendingApproval'
import { AddProject } from './protected-routes/projects/AddProject'
import { ProjectMemberEdit } from './protected-routes/projects/ProjectMembersEdit'
import { Projects } from './protected-routes/projects/Projects'
import { routePaths } from './route-paths'

const Routes = () => {
  return (
    <Switch>
      <PublicRoute exact path={routePaths.root} component={Home} />
      <PublicRoute exact path={routePaths.login} component={Login} />
      <PublicRoute exact path={routePaths.connect} component={Connect} />
      <ProtectedRoute exact path={routePaths.private.pending} component={PendingApproval} />
      <ProtectedRoute exact path={routePaths.private.projects} component={Projects} />
      <ProtectedRoute exact path={routePaths.private.addProject} component={AddProject} />
      <ProtectedRoute exact path={routePaths.private.projectsEdit} component={AddProject} />
      <ProtectedRoute exact path={routePaths.private.projectMembershipsEdit} component={ProjectMemberEdit} />
    </Switch>
  )
}

export { Routes }
