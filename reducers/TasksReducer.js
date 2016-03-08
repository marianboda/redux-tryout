import { ADD_TASK, DELETE_TASK } from '../actions'

const initialState = [
  {id: 1, title: 'task 1'},
  {id: 2, title: 'task 2'},
  {id: 3, title: 'task 3'},
]

const TasksReducer = (state = initialState, action) => {
  console.log('TasksReducer running', action)
  switch (action.type) {
    case ADD_TASK:
      let newTasks = state.map((i) => i)
      const newId = (newTasks.length)
                      ? newTasks[newTasks.length - 1].id + 1
                      : 1
      newTasks.push({id: newId, title: `${action.title} ${newId}`})
      return newTasks
    case DELETE_TASK:
      return state.filter((i) => i.id !== action.id)
    }

  return state
}

export default TasksReducer
