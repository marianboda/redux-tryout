import React from 'react'
import TaskList from './components/TaskList'
import { addTask, deleteTask } from './actions'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    addTask: (name) => { dispatch(addTask('a')) },
    deleteTask: (id) => { dispatch(deleteTask(id)) }
  }
}

class App extends React.Component {
  render () {
    return <div>
        <h1>Tasks</h1>
        <TaskList tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
        <button onClick={this.props.addTask}>ADD</button>
      </div>
  }
}

export default connect(mapState, mapDispatch)(App)
