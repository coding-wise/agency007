import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { logoutAction } from '../../../../redux/ducks/authenticate'
import { clearMe } from '../../../../redux/ducks/get-me'
import './menu.scss'
class MenuComponent extends React.Component<any, any> {
  logout = () => {
    const { logoutAction, clearMe, history } = this.props

    logoutAction()
    clearMe()
    localStorage.removeItem('token')

    history.push('/login')
  }

  render() {
    return (
      <div className="menu">
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: bindActionCreators(logoutAction, dispatch),
    clearMe: bindActionCreators(clearMe, dispatch),
  }
}

const Menu = withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(MenuComponent),
)

export { Menu }
