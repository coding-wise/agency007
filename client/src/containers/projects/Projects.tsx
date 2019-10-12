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
    console.log(this.props)

    return <span>Project list</span>
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
