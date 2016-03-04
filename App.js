import React from 'react'
import { Link } from 'react-router'

const liStyle = {
  display: "inline",
  marginRight: 20,
  cursor: "pointer",
}

class App extends React.Component {
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

export default App
