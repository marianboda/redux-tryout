const koa = require('koa')
const app = koa()

app.use(function *(){
  this.body = JSON.stringify({
    tasks: [
      {id: 1, title: 'task 1'},
      {id: 2, title: 'task 2'},
      {id: 3, title: 'task 3'},
      {id: 4, title: 'task 4'},
      {id: 5, title: 'task 5'},
    ],
    projects: [
      {id: 1, title: 'Project 1'},
      {id: 2, title: 'ProjectMan 5'},
      {id: 3, title: 'Siren'},
    ],
  })
}
)

app.listen(3000)
