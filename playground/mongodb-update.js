const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').findOneAndReplace({text: 'Eat lunch'}, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
        console.log(result)
    }); */

    db.collection('Users').findOneAndReplace({_id: new ObjectID("5ae300efa7186cc88c3c4e2e")}, {
        $set: {name: 'Jordan boyer'},
        $inc: {age: 1}
    }, {returnOriginal: false}).then((result) => {
        console.log(result)
    });
    //db.close();
});

