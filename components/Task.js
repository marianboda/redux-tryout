import React from 'react'

const Task = (props) => {
  return <div>
    <span>{props.title}</span>
    <span onClick={() => props.deleteTask(props.id)}> x</span>
  </div>
}

export default Task
