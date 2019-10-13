import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import { getProjectAction } from '../../redux/projects'
import { addMemberProjectAction } from '../../redux/projects/add-member-project'
import { removeMemberProjectAction } from '../../redux/projects/remove-member-project'
import { Loader } from '../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>
type RouteParams = RouteComponentProps<{ id: string }>

export class ProjectMemberEditComponent extends React.Component<Dispatchers & State & RouteParams, any> {
  get projectId() {
    const { id } = this.props.match.params

    return id
  }

  componentDidMount() {
    this.props.getProject(this.projectId)
  }

  addMember(email: string) {
    this.props.addMemberProject(this.projectId, email)
  }

  removeMember(membershipId: number) {
    this.props.removeMemberProject(this.projectId, membershipId)
  }

  onChange = (_, valueMeta) => {
    switch (valueMeta.action) {
      case 'select-option':
        this.addMember(valueMeta.option.label)
        break
      case 'remove-value':
        this.removeMember(valueMeta.removedValue.value)
        break
    }
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
            onChange={this.onChange}
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
    addMemberProject: bindActionCreators(addMemberProjectAction, dispatch),
    removeMemberProject: bindActionCreators(removeMemberProjectAction, dispatch),
  }
}

const ProjectMemberEdit = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectMemberEditComponent)

export { ProjectMemberEdit }
