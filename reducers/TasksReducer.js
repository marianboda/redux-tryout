import { ADD_TASK, DELETE_TASK, RECEIVE_DATA } from '../actions'

const TasksReducer = (state = [], action) => {
  console.log('TasksReducer running', action)
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data.tasks.slice()
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
