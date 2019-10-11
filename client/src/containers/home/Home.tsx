import * as React from 'react'
import { Redirect } from 'react-router-dom'
import '../../config'
import './home.scss'

export const Home = () =>
  <Redirect to="/login" />

