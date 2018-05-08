const jwt = require('jsonwebtoken');

const {Todo} = require('../../model/todo');
const {User} = require('../../model/user');
const {ObjectId} = require('mongodb');

const userOneId = new ObjectId();
const userTwoId = new ObjectId();

const users = [{
    _id: userOneId,
    email: 'jordan@example.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'jean@example.com',
    password: 'userTwoPass'
}];

const todos = [{
    _id: new ObjectId(),
    text: 'First test todo'
}, {
    _id: new ObjectId(),
    text: 'Second test todo',
    completed: true,
    completedAt: 333
}];

const populateTodos = function(done) {
    this.timeout(3000);
    Todo.remove({}).then(() => {
        Todo.insertMany(todos);
    }).then(() => {
        done();
    });
};

const populateUsers = function(done) {
    this.timeout(3000);
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo])
    }).then(() => done())
};

module.exports = {todos, populateTodos, users, populateUsers};