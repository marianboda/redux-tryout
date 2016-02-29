export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'

export function addTask(title) {
  return {
    type: ADD_TASK,
    title: title
  }
}

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id: id,
  }
}
