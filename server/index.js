const koa = require('koa')
const app = koa()

app.use(function *(){
  this.body = JSON.stringify({
    tasks: [
      {id: 1, name: 'task 1'},
      {id: 2, name: 'task 2'},
      {id: 3, name: 'task 3'},
    ]
  })
}
)

app.listen(3000)
