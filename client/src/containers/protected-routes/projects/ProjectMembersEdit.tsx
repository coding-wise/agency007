import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteComponentProps } from 'react-router'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import { getProjectAction } from '../../../redux/projects'
import { addMemberProjectAction } from '../../../redux/projects/add-member-project'
import { removeMemberProjectAction } from '../../../redux/projects/remove-member-project'
import { routePaths } from '../../route-paths'
import { Button } from '../../shared/button/Button'
import { Heading } from '../../shared/heading/Heading'
import { Loader } from '../../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>
type RouteParams = RouteComponentProps<{ id: string }>
interface ReduxProps {
  history: any
}

export class ProjectMemberEditComponent extends React.Component<Dispatchers & State & RouteParams & ReduxProps, any> {
  get projectId() {
    const {
      match: {
        params: { id },
      },
    } = this.props

    return id
  }

  componentDidMount() {
    const { getProject } = this.props

    getProject(this.projectId)
  }

  addMember(email: string) {
    const { addMemberProject } = this.props

    addMemberProject(this.projectId, email)
  }

  removeMember(membershipId: number) {
    const { addMemberProject } = this.props

    addMemberProject(this.projectId, membershipId)
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

  handleSubmit = () => {}

  render() {
    const {
      history,
      projects: { loading, data: project },
    } = this.props

    if (loading) {
      return <Loader />
    }

    if (!project) {
      return <Redirect to={routePaths.private.projects} />
    }

    const projectMembers = (project && project.members && project.members.pivotal) || []

    return (
      <>
        <Heading>
          <h1>Project members</h1>
          <Button onClick={history.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </Button>
        </Heading>
        <form onSubmit={this.handleSubmit}>
          <label>Pivotal</label>
          <Select
            onChange={this.onChange}
            isMulti={true}
            options={projectMembers.map((membership) => ({
              value: membership.id,
              label: membership.person.email,
            }))}
            value={projectMembers
              .filter((membership) => membership.selected)
              .map((membership) => ({
                value: membership.id,
                label: membership.person.email,
              }))}
          />
        </form>
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
