import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from 'redux'
import { getProjectAction } from '../../redux/projects'
import { Loader } from '../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>
type RouteParams = RouteComponentProps<{ id: string }>

export class ProjectMemberEditComponent extends React.Component<Dispatchers & State & RouteParams, any> {
  componentDidMount() {
    const { id } = this.props.match.params

    this.props.getProject(id)
  }

  render() {
    const { loading } = this.props.projects
    const { data: project } = this.props.projects

    if (loading) {
      return <Loader />
    }

    if (!project) {
      return <div>Project not found.</div>
    }

    return <div className="project">project {project.name} members</div>
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProject: bindActionCreators(getProjectAction, dispatch),
  }
}

const ProjectMemberEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectMemberEditComponent)

export { ProjectMemberEdit }
