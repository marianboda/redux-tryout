import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => {
    return <Task title={task.title} key={task.title}/>
  })
  return <div>{tasks}</div>
}

export default TaskList
