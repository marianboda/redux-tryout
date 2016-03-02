import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => {
    return <li key={task.id}><Task id={task.id} title={task.title} deleteTask={props.deleteTask}/></li>
  })
  return <div><ul>{tasks}</ul></div>
}

export default TaskList
