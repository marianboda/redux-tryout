const initialState = [
  {id: 1, title: 'Project 1'},
  {id: 2, title: 'ProjectMan 5'},
  {id: 3, title: 'Siren'}
]

const ProjectsReducer = (state = initialState, action) => {
  console.log('ProjectsReducer running')
  return state
}

export default ProjectsReducer
