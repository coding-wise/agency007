import * as React from 'react'
import './menu.scss'

export class Menu extends React.Component<any, any> {
  render() {
    return (
      <div className="menu">
        <button onClick={() => console.log('should logout')}>Logout</button>
      </div>
    )
  }
}
