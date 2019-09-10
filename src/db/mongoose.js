const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})
const User = mongoose.model('User', {
    name: {
        type: String,
        required:true
        
    },
    age: {
        type: Number,
        validate(value){
            if(value<0){
                throw new Error('age cant be negetive')
            }
        }
    }
})
 const me =new User({
     name:'Raunak',
     age:-20
 })
 me.save().then(()=>{
     console.log(me)
 }).catch((error)=>{
     console.log(error)
 })
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
// const laundry = new Task({
//     description: 'laundry',
//     completed: false
// })
// laundry.save().then(() => {
//     console.log(laundry)
// }).catch((error) => {
//     console.log(error)
// })