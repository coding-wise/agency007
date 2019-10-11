import * as React from 'react'
import { config } from '../../config'
import robot from '../shared/assets/robot.png'
import googleLogo from './google-logo.svg'
import './login.scss'

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
