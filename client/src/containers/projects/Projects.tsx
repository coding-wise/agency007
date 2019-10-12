import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProjectsAction } from '../../redux/projects/get-projects'
import './projects.scss'

export class ProjectsComponent extends React.Component<any, any> {
  componentDidMount() {
    this.props.getProjects()
  }

  render() {
    const {
      projects: { loading },
      history,
    } = this.props
    const { data: projects } = this.props.projects

    if (loading) {
      return <div>Loading...</div>
    }

    if (!projects || !projects.length) {
      return <div>You have no projects, create one first.</div>
    }

    return (
      <>
        <button onClick={() => history.push('/add-project')}>Add project</button>
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="name">{project.name}</div>
            <div className="actions">
              <div className="edit-members">Add</div>
              <div className="edit">Edit</div>
            </div>
          </div>
        ))}
      </>
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
