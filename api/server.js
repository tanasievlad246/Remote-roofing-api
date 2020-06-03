import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect'

/*
* Importing  the controllers
*/
import users from './controllers/users';
import tasks from './controllers/tasks';
import projects from './controllers/projects';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())

dbConnect();

app.get('/', (req, res) => {
    res.status(200)
    res.redirect('/API')
})

app.get('/API', (req, res) => {
    res.status(200).send({
        name: "Remote Roofing API",
        data_type: "JSON",
        routes: ['/API/users', '/API/tasks', '/API/projects'],
    })
})

app.use('/API/users', users);
app.use('/API/tasks', tasks);
app.use('/API/projects', projects);

app.listen(port, () => console.log(`Running on ${port}`))