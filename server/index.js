const koa = require('koa')
const app = koa()

app.use(function *(){
  this.body = JSON.stringify({
    tasks: [
      {id: 1, name: 'task 1'},
      {id: 2, name: 'task 2'},
      {id: 3, name: 'task 3'},
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
