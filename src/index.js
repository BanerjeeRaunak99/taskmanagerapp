const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/task')
const port = process.env.PORT || 3000
const app = express()
// app.use((req,res,next)=>{
//     res.status(503).send('site under maintenance')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('server is up on port  ' + port)
})


const jwt = require('jsonwebtoken')

const myFunction = async()=>{
    const token=jwt.sign({_id:'abc123'},'thisisanewhobby')
    console.log(token)
    const data = jwt.verify(token,"thisisanewhobby")
    console.log(data)
}
// myFunction()