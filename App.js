import React from 'react'
import TaskList from './components/TaskList'

class App extends React.Component {
  render() {
    const tasks = [{title: 'task 1'}, {title: 'task 2'}]
    return <div>
        <h1>Tasks</h1>
        <TaskList tasks={tasks} />
      </div>
  }
}

export default App
