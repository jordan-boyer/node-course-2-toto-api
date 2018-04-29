const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }); */

    /* db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        console.log(result);
    }); */

   /*  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').deleteMany({name: 'Jordan Boyer'}).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5ae37c3569ac78312da0e441")}).then((result) => {
        console.log(result);
    });
    //db.close();
});

