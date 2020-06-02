import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect'

/*
* Importing  the controllers
*/
import users from './controllers/users';


const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())

dbConnect();

app.use('/', users);






app.listen(port, () => console.log(`Running on ${port}`))