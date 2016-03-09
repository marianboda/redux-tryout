import { RECEIVE_DATA } from '../actions'

const ProjectsReducer = (state = [], action) => {
  console.log('ProjectsReducer running', action)
  switch (action.type) {
    case RECEIVE_DATA:
      return action.data.projects.slice()
  }
  return state
}

export default ProjectsReducer
