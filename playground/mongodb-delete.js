const {MongoClient, ObjectID} = require('mongodb');
const yargs = require('yargs');
const params = yargs.argv;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB Server!');
    }   
    console.log('Connected to MongoDB Server.');
    
    //delete many
    // db.collection('Users').deleteMany({name: 'Aashish Yadav'}).then((result)=>{
    //     console.log(result);
    // });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findone and delete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('5cea94452720490d24f61573')}).then((result)=>{
        console.log(result);
    });

    db.close();
});