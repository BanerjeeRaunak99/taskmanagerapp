const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
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
app.listen(port, () => {
    console.log('server is up on port  ' + port)
})