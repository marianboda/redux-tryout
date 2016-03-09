import { ADD_TASK, DELETE_TASK, FETCH_DATA } from '../actions'
import { combineReducers } from 'redux'

import tasks from './TasksReducer'
import projects from './ProjectsReducer'

const apiReducer = (state = initialState, action) => {
  console.log('REDUCING: ', action)
  return state
}


const combinedReducer = combineReducers({
  tasks,
  projects,
})


export default combinedReducer
