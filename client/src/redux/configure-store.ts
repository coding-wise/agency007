import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authentication } from './ducks/authenticate'
import { me } from './ducks/get-me'
import { pivotalProjects } from './projects/get-pivotal-projects'
import { projects } from './projects/get-projects'

const ducks = combineReducers({
  authentication,
  me,
  projects,
  pivotalProjects,
})

const configureStore = () => createStore(ducks, composeWithDevTools(applyMiddleware(thunk)))

export { configureStore }
