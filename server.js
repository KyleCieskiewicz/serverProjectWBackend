const express = require('express');
const massive = require('massive');
const { json } = require('body-parser');
const cors = require("cors");
const { dbUser, database } = require('./config');

const serverController = require('./serverController');
const port = 3000;
const connectionString = `postgres://${dbUser}@localhost/${database}`

const app = express();

app.use(json());
app.use(cors());
app.use(express.static(__dirname + '/public'));



const massiveConnection = massive(connectionString)
    .then(db => {
        app.set('db', db);
    })
    .catch(err => {
        console.log(err);
    });



app.post("/api/users", serverController.addUser);
app.get("/api/users", serverController.getAllUsers);




app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})