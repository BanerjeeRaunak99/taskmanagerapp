const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const port = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {
        res.send(user)
    }).catch(() => {

    })
})
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then(() => {
        res.send(task)
    }).catch(() => {

    })
})
app.listen(port, () => {
    console.log('server is up on port  ' + port)
})