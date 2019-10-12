import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import './loader.scss'

export const Loader = () => (
  <div className="loader">
    <FontAwesomeIcon icon={faCircleNotch} spin />
  </div>
)
