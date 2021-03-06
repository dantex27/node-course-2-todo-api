const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ced62313486942b885a1620';

// if(!ObjectId.isValid(id)){
//     console.log('Id not Valid.')
// }

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos', todos);
// });

// Todo.findOne({_id: id}).then((todo)=>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not valid.')
//     }
//     console.log('Todo By Id', todo);
// }).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
    if(!user){
        return console.log('User with id do not exist.')
    }

    console.log('User by Id', user);
}).catch((e)=> console.log(e));