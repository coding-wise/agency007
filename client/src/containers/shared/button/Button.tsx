import * as React from 'react'
import './button.scss'

export const Button = ({ children, ...props }) => (
  <button className="button-component" {...props}>
    {children}
  </button>
)
