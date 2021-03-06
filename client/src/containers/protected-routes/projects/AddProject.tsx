import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import { getProjectAction } from '../../../redux/projects'
import { addProjectAction } from '../../../redux/projects/add-project'
import { getPivotalProjectsAction } from '../../../redux/projects/get-pivotal-projects'
import { clearCurrentProjectAction } from '../../../redux/projects/set-current-project'
import { updateProjectAction } from '../../../redux/projects/update-project'
import { routePaths } from '../../route-paths'
import { Button } from '../../shared/button/Button'
import { Heading } from '../../shared/heading/Heading'
import { Loader } from '../../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>

interface Props {
  history: any
  match: any
}

type AddProjectProps = Props & Dispatchers & State

enum Operation {
  create = 'Create',
  update = 'Update',
}

class AddProjectComponent extends React.Component<AddProjectProps, any> {
  constructor(props) {
    super(props)

    this.state = {
      projectName: (props.currentProject && props.currentProject.name) || '',
      pivotalId: (props.currentProject && props.currentProject.pivotal && props.currentProject.pivotal[0]) || undefined,
      operation: Operation.create,
    }
  }

  componentDidMount() {
    const {
      match: { params },
      currentProject,
      getProject,
    } = this.props

    if (params.id) {
      this.setState({ operation: Operation.update, id: params.id })
      !!currentProject && getProject(params.id)
    }

    this.props.getPivotalProjects()
  }

  componentWillUnmount = () => {
    this.props.clearCurrentProject()
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { addProject, history, updateProject } = this.props
    const { operation } = this.state

    if (operation === Operation.create) {
      await addProject(this.state)
    } else {
      await updateProject(this.state)
    }

    history.push(routePaths.private.projects)
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSelectChange = (selectedValue) => {
    const { name, value } = selectedValue
    this.setState({ [name]: value })
  }

  render() {
    const {
      history,
      pivotalProjects: { loading, data },
    } = this.props

    const { projectName, pivotalId } = this.state

    const { operation } = this.state

    if (loading) return <Loader />

    const options =
      data &&
      data.map((project) => {
        return { value: project.id, label: project.name, name: 'pivotalId' }
      })

    const defaultOption = pivotalId ? options.filter((option) => option.value === pivotalId) : ''

    return (
      <>
        <Heading>
          <h1>{operation === Operation.create ? 'Add' : 'Edit'} project</h1>
          <Button onClick={history.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </Button>
        </Heading>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input name="projectName" type="text" value={projectName} onChange={this.handleChange} required />
          <label>Pivotal</label>
          <Select
            defaultValue={defaultOption}
            options={options}
            classNamePrefix="select"
            onChange={this.handleSelectChange}
          />

          <Button type="submit">Save</Button>
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pivotalProjects: state.pivotalProjects,
    currentProject: state.projects.currentProject,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPivotalProjects: bindActionCreators(getPivotalProjectsAction, dispatch),
    addProject: bindActionCreators(addProjectAction, dispatch),
    clearCurrentProject: bindActionCreators(clearCurrentProjectAction, dispatch),
    getProject: bindActionCreators(getProjectAction, dispatch),
    updateProject: bindActionCreators(updateProjectAction, dispatch),
  }
}

const AddProject = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProjectComponent)

export { AddProject }
