import { ADD_TASK, DELETE_TASK, FETCH_DATA } from '../actions'
import { combineReducers } from 'redux'
import request from 'browser-request'
import tasks from './TasksReducer'
import projects from './ProjectsReducer'

const initialState = {
  projects: [
    {id: 1, title: 'Project 1'},
    {id: 2, title: 'ProjectMan 5'},
    {id: 3, title: 'Siren'}
  ],
  tasks: [
    {id: 1, title: 'task 1'},
    {id: 2, title: 'task 2'},
    {id: 3, title: 'task 3'},
  ]
}

const apiReducer = (state = initialState, action) => {
  console.log('REDUCING: ', action)
  switch (action.type) {
    case FETCH_DATA:
      request('/api/', (er, response, body) => {
        console.log('request done', body)
      })
      return state

    default:
      return state
  }
}


const combinedReducer = combineReducers({
  tasks,
  projects,
})


export default combinedReducer
