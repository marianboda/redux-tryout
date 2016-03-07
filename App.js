import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { fetchData } from './actions'

const liStyle = {
  display: "inline",
  marginRight: 20,
  cursor: "pointer",
}

const mapState = (state) => { return {} }
const mapDispatch = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }
  render () {
    return <div>
        <ul>
          <li style={liStyle}><Link to="/tasks">Tasks</Link></li>
          <li style={liStyle}><Link to="/projects">Projects</Link></li>
        </ul>
        {this.props.children}
      </div>
  }
}

export default connect(mapState, mapDispatch)(App)
