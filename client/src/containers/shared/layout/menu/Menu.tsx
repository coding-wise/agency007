import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { logoutAction } from '../../../../redux/ducks/authenticate'
import { clearMeAction } from '../../../../redux/ducks/get-me'
import './menu.scss'
class MenuComponent extends React.Component<any, any> {
  constructor(props) {
    super(props)

    this.state = {
      egg: 0,
    }
  }
  logout = (e) => {
    e.preventDefault()

    const { logoutAction, clearMe, history } = this.props

    logoutAction()
    clearMe()
    localStorage.removeItem('token')

    history.push('/login')
  }

  easterEggCount = () => {
    const { egg } = this.state

    this.setState({ egg: egg + 1 })
  }

  render() {
    const { egg } = this.state

    let classN = 'menu'

    if (egg >= 5) {
      classN = 'menu easter-egg'
    }

    return (
      <div className={classN} onClick={this.easterEggCount}>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutAction: bindActionCreators(logoutAction, dispatch),
    clearMe: bindActionCreators(clearMeAction, dispatch),
  }
}

const Menu = withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(MenuComponent),
)

export { Menu }
