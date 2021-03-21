import express from 'express';
import sequelize from 'sequelize';

import { User, Task, Project } from '../../models/index';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.body.filter) {
        let results = await User.findAll({
            order: sequelize.literal(`${req.body.filter} ASC`)
        });
        res.status(200);
        res.send(results);
    } else {
        let results = await User.findAll();
        res.status(200);
        res.send(results);
    }
});

router.get('/:id', async (req, res) => {
    let results = await User.findAll({
        where: {
            id: req.params.id
        }
    });
    res.status(200);
    res.send(results);
});


//Need to modify for the tasks to be displayed as an array
router.get('/:id/work', async (req, res) => {
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
})

//Implement delete route 
//Implement put route

//Implement user authentication
//Implement login route

export default router;