import React from 'react'
import { Link } from 'react-router'

const Task = (props) => {
  return <div>
    <Link to={`/tasks/${props.id}`}>{props.title}</Link>
    <span onClick={() => props.deleteTask(props.id)}> x</span>
  </div>
}

export default Task
