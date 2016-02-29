import { ADD_TASK } from '../actions'

const initialState = {
  tasks: [
    {id: 1, title: 'task 1'},
    {id: 2, title: 'task 2'},
    {id: 3, title: 'task 3'},
  ]
}

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TASK) {
    let newTasks = state.tasks.map((i) => i)
    const newId = newTasks.length + 1
    newTasks.push({id: newId, title: `${action.title} ${newId}`})
    return { tasks: newTasks }
  } else {
    return state
  }
}

export default reducer
