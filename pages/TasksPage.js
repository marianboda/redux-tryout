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
    let { id } = this.props.params
    let detail = ''
    let task = this.props.tasks.filter((i) => i.id == id)[0]

    if (id && task) {
      detail = <div style={{flexGrow:1, flexBasis: 100}}>
          <h3>Task detail</h3>
          ID: {id}<br />
          TITLE: {task.title}
        </div>
    }
    return <div>
      <h1>Tasks</h1>
      <div>
        <input type="text" value={this.state.text} onChange={this.textChange.bind(this)}/>
        <button onClick={() => this.props.addTask(this.state.text)}>ADD</button>
      </div>
      <div style={{display:"flex"}}>
        <div style={{flexGrow:0, flexBasis: 200}}>
          <TaskList tasks={this.props.tasks} deleteTask={this.props.deleteTask} />
        </div>
        {detail}
      </div>
    </div>
  }
}

export default connect(mapState, mapDispatch)(TasksPage)
