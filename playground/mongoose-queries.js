const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/model/todo');
const {User} = require('./../server/model/user');

/* var id = '6ae8496bb61ccd0f7dd68bfee';

if (!ObjectId.isValid(id)) {
    console.log('ID not valid')
}
 */
/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo)
});
 */
/* Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo by id', todo)
}).catch((e) => console.log(e)); */

const id = '5ae5d75507b9b448b8686ae2'

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('User: ', user);
}).catch((e) => {
    console.log(e);
});