const mongodb =require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID =mongodb.ObjectID
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('unable to connect')
    }
    const db = client.db(databaseName)
    const updatePromise = db.collection('users').updateOne({
        _id:new ObjectID("5d713c68cc8caa14f8d3d404")
    },{
        $inc:{
            age:1
        }
    })
    updatePromise.then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
    
})