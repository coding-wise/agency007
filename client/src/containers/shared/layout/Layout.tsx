import * as React from 'react'
import './layout.scss'
import { Menu } from './menu/Menu'

export class Layout extends React.Component<any, any> {
  render() {
    const { children } = this.props

    if (/pending/.test(window.location.pathname)) {
      return children
    }

    return (
      <div className="layout">
        <Menu />
        <div className="content-container">{children}</div>
      </div>
    )
  }
}
