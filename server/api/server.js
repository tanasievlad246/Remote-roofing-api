import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect';
import passport from 'passport';
import session from 'express-session';
import sequelizeStore from 'connect-session-sequelize';
import sequelize from '../api/config/config';
import jwtConfig from './config/jwtconfig';
import cors from 'cors';

/*
* Importing  the controllers
*/
import users from './controllers/users';
import tasks from './controllers/tasks';
import projects from './controllers/projects';
import auth from './controllers/localauth';

const app = express();
const port = process.env.PORT || 8090;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
dbConnect();

//enable cors
app.use(cors({
    origin: '*'
}));

// for jwt authentication and authorization
jwtConfig(passport);
app.use(passport.initialize());

app.get('/', (req, res) => {
    res.status(200);
    res.redirect('/API');
});

app.get('/API', (req, res) => {
    res.status(200).send({
        name: "Remote Roofing API",
        data_type: "JSON",
        routes: [ '/API/users', '/API/tasks', '/API/projects' ],
    });
});

//TODO: Secure routes to only allow authenticated and authorized users

app.use('/API/users', users);
app.use('/API/tasks', passport.authenticate('jwt', { session: false }), tasks);
app.use('/API/projects', passport.authenticate('jwt', { session: false }), projects);

app.listen(port, () => console.log(`Running on ${port}`));