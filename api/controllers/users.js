import express from 'express';
import sequelize from 'sequelize';
import passport from 'passport';
import { hashPassword } from '../utils/passwordUtils';
import session from 'express-session';
import PgStore from 'connect-pg-simple';

import { User, Task, Project } from '../../models/index';
import { hash } from 'bcrypt';

const router = express.Router();


/**
 * Get all users
 * TODO: Implement filtering by name and surname
 */
router.get('/', async (req, res) => {
    if (req.body.filter) {
        let results = await User.findAll({
            order: sequelize.literal(`${req.body.filter} ASC`),
        });
        res.status(200);
        res.send(results);
    } else {
        let results = await User.findAll();
        res.status(200);
        res.send(results);
    }
});

//TODO: Implement user login
router.post("/login", passport.authenticate('local'), (req, res) => {
    const PgSession = PgStore(session);

    session({
        store: new PgSession(),
        secret: 'asd',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
    })

    res.send({session: req.session})
})

// Temporal frontend form to check requests from browser
router.get('/auth/"type', (req, res) => {
    res.send(`
        <form action="/API/users/create" method="POST">
            <label>email</label>
            <input name="email"/>\
            <label>password</label>
            <input name="password" type="password"/>
            <label>name</label>
            <input name="name"/>
            <label>surname</label>
            <input name="surname"/>
            <button type=submit>Register</button>
        </form>
    `)
})

/*
 *
 * @param { id } "user id to retrieve the user who has that id"
 */
router.get('/:id', async (req, res) => {
    let results = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200);
    res.send(results);
});


/**
 * Get one user and all projects and tasks the user is an asigner for
 * @param { id } "the uuid of a user"
 */
router.get('/:id/asigner', async (req, res) => {
    let results = await User.findAll(
        {
            where: {
                id: req.params.id
            },
            include: [Task, Project]
        }
    );
    res.status(200);
    res.send(results);
});

/**
 * Post one user
 * TODO: Implement password hashing
 */
router.post('/', async (req, res) => {
    // Implement password hashing for password
    console.log(req.body)

    const securityHashes = hashPassword(req.body.password);
    const salt = securityHashes.salt;
    const password = securityHashes.hash;

    let user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        password: password,
        salt: salt,
        email: req.body.email,
    })

    res.status(200);
    res.send(user);
});

/**
 * Update user fields
 * @param { id } "the uuid of a user"
 */
router.patch("/:id", async (req, res) => {
    try {
        const update = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        console.log(update);
        res.status(200);
        res.send(User.findOne({
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});


/**
 * Delete one user
 */
router.delete("/:id", async (req, res) => {
    try {
        const operation = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(202);
        res.send(operation);
    } catch (error) {
        res.send(error);
    }
});

export default router;