const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');
const params = yargs.argv;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }   
    console.log('Connected to MongoDB Server.');
    // db.collection('Todos').find({
    //     _id : ObjectID('5ceaa3199f2079102ef6e0a6')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //     console.log('Unable to fetch todos!');
    // });

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos Count: ${count}`); 
    // },(err)=>{
    //     console.log('Unable to fetch todos!');
    // });

    db.collection('Users').find({
        name: params.name
    }).toArray().then((docs)=>{
        console.log(`Todos Count: ${docs.length}`);
        console.log(JSON.stringify(docs, undefined, 2));   
    },(err)=>{
        console.log('Unable to fetch todos!');
    });

    db.close();
});