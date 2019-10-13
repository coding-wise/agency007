import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { authentication } from './ducks/authenticate'
import { me } from './ducks/get-me'
import { projects } from './projects'
import { pivotalProjects } from './projects/get-pivotal-projects'

const ducks = combineReducers({
  authentication,
  me,
  projects,
  pivotalProjects,
})

const configureStore = () => createStore(ducks, composeWithDevTools(applyMiddleware(thunk)))

export { configureStore }
