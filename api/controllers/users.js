import express from 'express';
import sequelize from 'sequelize';
import passport from 'passport';
import { hashPassword, validatePassword } from '../utils/passwordUtils';
import { User, Task, Project } from '../../models/index';
import { issueJWT } from '../utils/JWTUtils';

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
            include: [ Task, Project ]
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
    const securityHashes = hashPassword(req.body.password);
    const salt = securityHashes.salt;
    const password = securityHashes.hash;

    let user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        password: password,
        salt: salt,
        email: req.body.email,
    });

    res.status(200);
    res.send(user);
});


// TODO: Create login functionality for jwt
router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        const pwValidation = validatePassword(password, user.password, user.salt);

        if (!user) {
            res.status(404);
            res.send({
                message: "User not found"
            });
        } else if (pwValidation) {
            res.status(200);
            res.send(issueJWT(user));
        }
    } catch (error) {
        res.send({
            message: error
        });
        console.log(error);
    }
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
        });
        res.status(202);
        res.send(operation);
    } catch (error) {
        res.send(error);
    }
});

export default router;