import React from 'react'
import ProjectsList from '../components/ProjectsList'
import { connect } from 'react-redux'

const mapState = (state) => {
  return {
    projects: state.projects
  }
}

const mapDispatch = (dispatch) => {
  return {}
}

const ProjectsPage = (props) => {
  return <ProjectsList projects={props.projects}/>
}

export default connect(mapState, mapDispatch)(ProjectsPage)
