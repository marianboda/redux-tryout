import React from 'react'
import TaskList from './components/TaskList'

class App extends React.Component {
  render () {
    const tasks = [{title: 'task 1'}, {title: 'task 2'}, {title: 'task 3'}]
    return <div>
        <h1>Tasks</h1>
        <TaskList tasks={tasks} />
        <button>ADD</button>
      </div>
  }
}

export default App
