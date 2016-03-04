import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import store from './store'
import App from './App'
import TasksPage from './pages/TasksPage'
import ProjectsPage from './pages/ProjectsPage'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="tasks" component={TasksPage} />
          <Route path="projects" component={ProjectsPage} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app'))
