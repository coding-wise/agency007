import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import Select from 'react-select'
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

    return (
      <>
        <h2>Adding members to {project.name} project</h2>
        <div>
          <h3>Pivotal</h3>

          <Select
            isMulti={true}
            options={project.members.pivotal.map((membership) => ({
              value: membership.id,
              label: membership.person.email,
            }))}
            value={project.members.pivotal
              .filter((membership) => membership.selected)
              .map((membership) => ({
                value: membership.id,
                label: membership.person.email,
              }))}
          />

          <ul>
            {project.members.pivotal.map((membership) => (
              <li key={membership.id}>{membership.person.email}</li>
            ))}
          </ul>
        </div>
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
    getProject: bindActionCreators(getProjectAction, dispatch),
  }
}

const ProjectMemberEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectMemberEditComponent)

export { ProjectMemberEdit }
