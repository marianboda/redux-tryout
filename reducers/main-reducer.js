import { ADD_TASK, DELETE_TASK, FETCH_DATA } from '../actions'
import request from 'browser-request'

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

const reducer = (state = initialState, action) => {
  console.log('REDUCING: ', action)
  switch (action.type) {
    case ADD_TASK:
      let newTasks = state.tasks.map((i) => i)
      const newId = newTasks.length + 1
      newTasks.push({id: newId, title: `${action.title} ${newId}`})
      return { tasks: newTasks }
    case DELETE_TASK:
      return Object.assign({},
        { tasks: state.tasks.filter((i) => i.id !== action.id) }
      )
    case FETCH_DATA:
      request('/api/', (er, response, body) => {
        console.log('request done', body)
      }
    )
      return state

    default:
      return state
  }
}

export default reducer
