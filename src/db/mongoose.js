const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim:true,
//         required:true
//     },
//     completed: {
//         type: Boolean,
//         default:false
//     }
// })
// const laundry = new Task({
//     description: 'laundry',
//     completed: false
// })
// laundry.save().then(() => {
//     console.log(laundry)
// }).catch((error) => {
//     console.log(error)
// })