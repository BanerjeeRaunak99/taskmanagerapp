const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/task')
const port = process.env.PORT || 3000
const app = express()

const multer = require('multer')
const upload = multer({
    dest:'images',
    limits:{
        fileSize:10000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('please upload a pdf'))
        }
        return cb(undefined,true)
    }
    
})
app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
})




app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
 


app.listen(port, () => {
    console.log('server is up on port  ' + port)
})


