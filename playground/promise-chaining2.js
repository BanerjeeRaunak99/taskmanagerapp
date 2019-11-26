require('../src/db/mongoose')
const Task = require('../src/models/task')
// Task.findByIdAndDelete('5d77881165edd63494478322').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id,completed)=>{
    const task = await Task.findByIdAndDelete(id)
    return  await Task.countDocuments({completed}) 
}
deleteTaskAndCount("5d774a4b00a95e2cacaff6f5",false).then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})
