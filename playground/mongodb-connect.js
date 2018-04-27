const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert toto', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    }); */

    db.collection('Users').insertOne({
        name: 'Jordan Boyer',
        age: 24,
        location: 'France'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert toto', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});

