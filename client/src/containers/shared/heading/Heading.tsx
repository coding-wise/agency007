import * as React from 'react'
import './heading.scss'

export const Heading = ({ children, ...props }) => (
  <div className="heading-component" {...props}>
    {children}
  </div>
)
