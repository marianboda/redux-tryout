import React from 'react'
import { connect } from 'react-redux'
import TaskList from '../components/TaskList.js'
import { addTask, deleteTask} from '../actions'

const mapState = (state) => {
  return { tasks: state.tasks }
}

const mapDispatch = (dispatch) => {
  return {
    addTask: (name) => { dispatch(addTask(name)) },
    deleteTask: (id) => { dispatch(deleteTask(id)) }
  }
}

class TasksPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {text: '...'}
  }
  textChange(event) {
    this.setState({text: event.target.value})
  }
  render() {
    return <div>
      <h1>Tasks</h1>
      <TaskList tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
      <button onClick={() => this.props.addTask(this.state.text)}>ADD</button>
      <input type="text" value={this.state.text} onChange={this.textChange.bind(this)}/>
    </div>
  }
}

export default connect(mapState, mapDispatch)(TasksPage)
