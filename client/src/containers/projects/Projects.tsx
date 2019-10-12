import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProjectsAction } from '../../redux/projects/get-projects'
import { Loader } from '../shared/loader/Loader'
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
    const { loading } = this.props.projects
    const { data: projects } = this.props.projects

    if (loading) {
      return <Loader />
    }

    if (!projects || !projects.length) {
      return <div>You have no projects, create one first.</div>
    }

    return (
      <div className="projects">
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <div className="name">{project.name}</div>
              <div className="actions">
                <button className="edit-members" onClick={() => this.redirectToEditProjectMembers(project.id)}>
                  👨‍👨‍👦‍👦
                </button>
                <button className="edit" onClick={() => this.redirectToEditProject(project.id)}>
                  ✏️
                </button>
              </div>
            </div>
          ))}
        </div>
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
