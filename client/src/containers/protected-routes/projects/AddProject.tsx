import * as React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import { addProjectAction } from '../../../redux/projects/add-project'
import { getPivotalProjectsAction } from '../../../redux/projects/get-pivotal-projects'
import { routePaths } from '../../route-paths'
import { Loader } from '../../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>

interface Props {
  history: any
}

type AddProjectProps = Props & Dispatchers & State

class AddProjectComponent extends React.Component<AddProjectProps, any> {
  state = {
    projectName: '',
    pivotalId: undefined,
  }
  componentDidMount() {
    this.props.getPivotalProjects()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { addProject, history } = this.props
    addProject(this.state)
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
      pivotalProjects: { loading, data },
    } = this.props

    if (loading) return <Loader />

    const options =
      data &&
      data.map((project) => {
        return { value: project.id, label: project.name, name: 'pivotalId' }
      })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Project Name</label>
          <input name="projectName" type="text" value={this.state.projectName} onChange={this.handleChange} required />
          <label>Pivotal</label>
          <Select defaultValue="" options={options} classNamePrefix="select" onChange={this.handleSelectChange} />
          <button color="btn btn-primary" type="submit">
            Save
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pivotalProjects: state.pivotalProjects,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPivotalProjects: bindActionCreators(getPivotalProjectsAction, dispatch),
    addProject: bindActionCreators(addProjectAction, dispatch),
  }
}

const AddProject = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProjectComponent)

export { AddProject }
