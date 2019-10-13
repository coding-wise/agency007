import { faEdit, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProjectsAction } from '../../../redux/projects'
import { routePaths } from '../../route-paths'
import { Button } from '../../shared/button/Button'
import { Heading } from '../../shared/heading/Heading'
import { Loader } from '../../shared/loader/Loader'
import emptyIcon from './empty.svg'
import './projects.scss'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>

export class ProjectsComponent extends React.Component<Dispatchers & State & { history: any }, any> {
  componentDidMount() {
    this.props.getProjects()
  }

  redirectToEditProjectMembers(id: number) {
    this.props.history.push(`/projects/${id}/members`)
  }

  redirectToEditProject(id: number) {
    this.props.history.push(`/projects/${id}`)
  }

  render() {
    const {
      projects: { loading },
      history,
    } = this.props
    const { data: projects } = this.props.projects

    if (loading) {
      return <Loader />
    }

    const projectsList = projects && projects.length ? projects : []

    return (
      <div className="projects">
        <Heading>
          <h1>Projects</h1>
          <Button onClick={() => history.push(routePaths.private.addProject)}>Add Project</Button>
        </Heading>
        {!!projectsList.length && (
          <div className="projects-container">
            {projectsList.map((project) => (
              <div key={project.id} className="project">
                <div className="name">{project.name}</div>
                <div className="actions">
                  <button className="edit-members" onClick={() => this.redirectToEditProjectMembers(project.id)}>
                    <FontAwesomeIcon icon={faUsers} />
                  </button>
                  <button className="edit" onClick={() => this.redirectToEditProject(project.id)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {!projectsList.length && (
          <div className="empty">
            <div className="jump-station">
              <img alt="" className="tumbleweed" src={emptyIcon} />
            </div>
            There are no projects yet.
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProjects: bindActionCreators(getProjectsAction, dispatch),
  }
}

const Projects = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsComponent)

export { Projects }
