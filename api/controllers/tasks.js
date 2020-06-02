import express from 'express';
import Task from '../models/Task';
import sequelize from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Task.findAll();
    res.status(200);
    res.send(results);
    console.table(results);
});

router.get('/:id', async (req, res) => {
    let results = await Task.findAll({
        where: {
            id: req.params.id
        }
    });
    await res.status(200);
    await res.send(results);
    console.table(results);
});


// //modify
// router.post('/tasks', async (req, res) => {
//     let Task = await Task.create({
//         name: 'test',
//         surname: 'test',
//         email: 'test@asd.com',
//         projects_id: [1, 2]
//     })
//     await res.status(200);
//     res.send(Task);
//     console.log('Success');
// })

export default router;