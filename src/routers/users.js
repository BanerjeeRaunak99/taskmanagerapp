const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const multer = require('multer')
const router = new express.Router()
router.post('/users', async (req, res) => {
    const user = new User(req.body)
    
    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user,token})
       }
       catch(e){
           res.status(400).send(e)
       }
})
router.post('/users/login',async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(400).send()
    }
})
router.get('/users/me',auth, async (req,res)=>{
    res.send(req.user)
})
router.get('/users/:id',auth, async (req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        res.send(user)
    }catch(e){
        res.send(e)
    }
   

})
router.post('/users/logout',auth,async (req,res)=>{
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
router.post('/users/logoutALL',auth,async (req,res)=>{
    try{
        req.user.tokens = []
            
        
        await req.user.save()
        res.send()
    }catch(e){
        res.status(500).send()
    }
})
router.patch('/users/me',auth, async (req,res)=>{
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation=updates.every((update) => allowedUpdates.includes(update))
        
       
        
    
    console.log(isValidOperation)
    if(!isValidOperation){
        return res.status(400).send({error:'invalid updates'})
    }
     
    try{
       const user = await User.findById(req.user._id)
       updates.forEach((update)=>{
       user[update] = req.body[update]
           
       }) 
       await user.save()
        
        
        
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true})
       
        console.log(user)
        res.send(user)
    }catch(e){
        console.log(user)
        res.status(400).send(e)
    }
})
router.delete('/users/me',auth,async (req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.user._id)
        if(!user){
            return res.status(404).send()
        }
        res.send(req.user)
    }catch(e){
        res.status(500).send()
    }
})
const upload = multer({
    
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpeg|png|jpg)$/)){
            return cb(new Error('please upload a image'))
        }
        return cb(undefined,true)
    }
})
router.post('/users/me/avatar',upload.single('avatars'), async (req,res)=>{
    req.user.avatar = req.file.buffer
    await req.user.save()
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})





module.exports = router