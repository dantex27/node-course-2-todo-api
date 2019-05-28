const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }   
    console.log('Connected to MongoDB Server.');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ced5402b808ca771eb9852d')
    },{
        $set:{
            name: 'Himanshu Sharma'
        },
        $inc:{
            age: +5
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })

    db.close();
});