import React from 'react'
import TaskList from './components/TaskList'
import {addTask} from './actions'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    addTask: (id) => {
      dispatch(addTask('a'))
    }
  }
}

class App extends React.Component {
  render () {
    return <div>
        <h1>Tasks</h1>
        <TaskList tasks={this.props.tasks} />
        <button onClick={this.props.addTask}>ADD</button>
      </div>
  }
}

export default connect(mapState, mapDispatch)(App)
