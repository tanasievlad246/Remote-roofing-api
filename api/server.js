import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect'

/*
* Importing  the controllers
*/
import users from './controllers/users';
import tasks from './controllers/tasks';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())

dbConnect();


app.get('/', (req, res) => {
    res.status(200).res.send({
        message: "Welcome to the Remote Roofing API"
    })
})

app.use('/users', users);
app.use('/tasks', tasks);







app.listen(port, () => console.log(`Running on ${port}`))