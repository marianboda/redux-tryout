import request from 'browser-request'

export const ADD_TASK = 'ADD_TASK'
export const DELETE_TASK = 'DELETE_TASK'
export const FETCH_DATA = 'FETCH_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'

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

export const fetchData = () => {
  return (dispatch) => {
    request('/api/', (er, response, data) => {
      dispatch({
        type: RECEIVE_DATA,
        data: JSON.parse(data)
      })
    })
  }
}
