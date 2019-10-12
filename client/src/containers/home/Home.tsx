import * as React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import '../../config'
import { getMe } from '../../redux/ducks/get-me'
import { routePaths } from '../route-paths'
import { Loader } from '../shared/loader/Loader'
import './home.scss'

type Dispatchers = ReturnType<typeof mapDispatchToProps>
type State = ReturnType<typeof mapStateToProps>

class HomeComponent extends React.Component<Dispatchers & State, any> {
  componentDidMount() {
    const { getMe } = this.props

    getMe()
  }

  render() {
    const {
      me: { loading, data },
    } = this.props

    if (loading) return <Loader />

    if (!data.email) {
      return <Redirect to={routePaths.login} />
    }

    if (!data.is_admin) {
      return <Redirect to={routePaths.private.pending} />
    }

    return <Redirect to={routePaths.private.projects} />
  }
}

const mapStateToProps = (state) => {
  return {
    me: state.me,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMe: bindActionCreators(getMe, dispatch),
  }
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeComponent)

export { Home }
