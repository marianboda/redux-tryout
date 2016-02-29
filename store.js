import { createStore } from 'redux'
import reducer from './reducers/main-reducer'

const store = createStore(reducer)

export default store
