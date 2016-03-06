import React from 'react'

const ProjectsList = (props) => {
  let projects = props.projects.map( (i) => {
    return <li>{i.title}</li>
  })
  return <div>
      <h1>ProjectsList</h1>
      <ul>
        {projects}
      </ul>
    </div>

}

export default ProjectsList
