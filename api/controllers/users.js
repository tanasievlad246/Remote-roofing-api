import express from 'express';
import sequelize from 'sequelize';
import passport from 'passport';
import { hashPassword } from '../utils/passwordUtils';
import { User, Task, Project } from '../../models/index';

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

//FIXME: login not working
router.post("/login", passport.authenticate('local', {
    failureRedirect: "login-fail",
    successRedirect: "success-login"
}));

router.get('/login-fail', (req,res) => res.send(`<h1>Auth fail</h1>`))
router.get('/success-login', (req,res) => res.send(`<h1>Auth success</h1>`))

// Temporal frontend form to check requests from browser
router.get('/auth/:type', (req, res) => {
    if (req.params.type === 'register') {
        res.send(`
            <form action="/API/users" method="POST">
                <label for="email">email</label>
                <input name="email"/>
                <label for="password">password</label>
                <input name="password" type="password"/>
                <label for="name">name</label>
                <input name="name"/>
                <label for="surname">surname</label>
                <input name="surname"/>
                <button type=submit>Register</button>
            </form>
        `)
    } else if (req.params.type === 'login') {
        res.send(`
            <form action="/API/users/login" method="POST">
                <label>email</label>
                <input name="email"/>\
                <label>password</label>
                <input name="password" type="password"/>
                <button type=submit>Login</button>
            </form>
        `)
    }
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