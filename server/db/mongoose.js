var mongoose = require('mongoose');

var link = '';

if (process.env.PORT) {
    link = 'mongodb://jordan:finalfantasy@ds247479.mlab.com:47479/todo-api'
} else {
    link = 'mongodb://localhost:27017/TodoApp'
}

mongoose.Promise = global.Promise;
mongoose.connect(link);

module.exports = {mongoose};