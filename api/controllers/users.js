import express from 'express';
import sequelize from 'sequelize';

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

/**
 * Get one user
 * @param { id } "the uuid of a user"
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

    let user = await User.create({
        name: req.body.name,
        surname: req.body.surname,
        password: req.body.password,
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

//TODO: Implement user authentication
//TODO: Implement login route

export default router;