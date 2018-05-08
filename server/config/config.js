const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 8088;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
    process.env.PORT = 8088;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
} else {
    process.env.MONGODB_URI = 'mongodb://jordan:finalfantasy@ds247479.mlab.com:47479/todo-api';
}