import * as React from 'react'
import robot from '../../shared/assets/robot.png'
import './pending-approval.scss'
import thinking from './thinking.svg'

const PendingApproval = ({ history }) => (
  <div className="pending-approval">
    <div className="centered-content">
      <img className="logo" alt="" src={robot} />
      <p>
        You are almost there!
        <br />
        Ask someone more important than you for permissions.
      </p>
      <button onClick={() => history.push('/')}>
        <img src={thinking} alt="" />
        Check again, please?!
      </button>
    </div>
  </div>
)

export { PendingApproval }
