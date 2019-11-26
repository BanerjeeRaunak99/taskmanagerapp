require('../src/db/mongoose')
const User = require('../src/models/user')
// User.findByIdAndUpdate('5d776176d3d43533104f5c7c',{age:20}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:20})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })
const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    console.log(user,count)
}
updateAgeAndCount('5d776176d3d43533104f5c7c',19)