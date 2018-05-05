const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

/* Todo.findOneAndRemove({}).then((result) => {

}) */

Todo.findByIdAndRemove('').then((todo) => {
    console.log(todo);
});