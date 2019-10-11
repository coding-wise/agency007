import * as React from 'react'
import robot from '../../shared/assets/robot.png'
import './pending-approval.scss'

const PendingApproval = () => (
  <div className="pending-approval">
    <div className="centered-content">
      <img className="logo" alt="" src={robot} />
      <p>
        You are almost there!
        <br />
        Ask someone more important than you for permissions.
      </p>
    </div>
  </div>
)

export { PendingApproval }
