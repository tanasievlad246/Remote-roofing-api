import express from 'express';
import bodyParser from 'body-parser';
import dbConnect from './config/dbconnect'
import passport from 'passport';
import session from 'express-session';
import sequelizeStore from 'connect-session-sequelize';
import sequelize from '../api/config/config';
import flash from 'connect-flash';

/*
* Importing  the controllers
*/
import users from './controllers/users';
import tasks from './controllers/tasks';
import projects from './controllers/projects';
import userwork from './controllers/userwrok';
import auth from './controllers/localauth';

const app = express();
const port = process.env.PORT || 8090;

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
dbConnect();

const SequelizeStore = sequelizeStore(session.Store)
const db = sequelize

//FIXME: Connect to pg store using connect-pg-sequelize
app.use(session({
    secret: 'zxcvbnm',
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: db
    }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.use(flash());

import './config/passport';

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log("Debug middleware")
    console.log(req.session);
    console.log(req.user);
    next();
})

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

app.use('/local', auth);

app.use('/API/users', users);
app.use('/API/tasks', tasks);
app.use('/API/projects', projects);
app.use('/API/work', userwork);

app.listen(port, () => console.log(`Running on ${port}`))