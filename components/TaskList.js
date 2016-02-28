import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => {
    return <li key={task.title}><Task title={task.title} /></li>
  })
  return <div><ul>{tasks}</ul></div>
}

export default TaskList
