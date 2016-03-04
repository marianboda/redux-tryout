import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import TaskList from './components/TaskList'
import { addTask, deleteTask } from './actions'

const mapState = (state) => {
  return {
    tasks: state.tasks
  }
}

const mapDispatch = (dispatch) => {
  return {
    addTask: (name) => { dispatch(addTask(name)) },
    deleteTask: (id) => { dispatch(deleteTask(id)) }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: 'tsk'}
  }
  textChange(event) {
    console.log('this', this)
    this.setState({text: event.target.value})
  }
  render () {
    return <div>
        <ul>
          <li><Link to="/tasks">Tasks</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        <h1>Tasks</h1>
        <TaskList tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
        <button onClick={() => this.props.addTask(this.state.text)}>ADD</button>
        <input type="text" value={this.state.text} onChange={this.textChange.bind(this)}/>
        {this.props.children}
      </div>
  }
}

export default connect(mapState, mapDispatch)(App)
