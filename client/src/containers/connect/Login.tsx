import * as React from 'react'
import { config } from '../../config'
import googleLogo from './google-logo.svg'
import './login.scss'
import robot from './robot.png'

const Login = () => (
  <div className="login">
    <div className="centered-content">
      <h1>Agency 007</h1>
      <img className="logo" alt="" src={robot} />
      <a href={config.authUrl.google}>
        <img src={googleLogo} alt="" />
        Login with @ae.studio
      </a>
    </div>
  </div>
)

export { Login }
