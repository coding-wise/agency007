import * as React from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import { bindActionCreators } from 'redux'
import { getPivotalProjectsAction } from '../../../redux/projects/get-pivotal-projects'
import { Loader } from '../../shared/loader/Loader'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>

class AddProjectComponent extends React.Component<Dispatchers & State, any> {
  componentDidMount() {
    this.props.getPivotalProjects()
  }

  handleSubmit = () => {}

  render() {
    const {
      pivotalProjects: { loading, data },
    } = this.props

    if (loading) return <Loader />

    const options = data.map((project) => {
      return { value: project.id, label: project.name }
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <label>Name</label>
          <input name="name" type="text" />
          <label>Pivotal</label>
          <Select
            defaultValue={options[0]}
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />

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
  }
}

const AddProject = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddProjectComponent)

export { AddProject }
