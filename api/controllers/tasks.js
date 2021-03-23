import express from 'express';
import { User, Task, Project } from '../../models/index';

const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Task.findAll({
        include: [User, Project]
    });
    res.status(200);
    res.send(results);
});

router.get('/:id', async (req, res) => {
    try {
        let results = await Task.findAll({
            where: {
                id: req.params.id
            },
            include: [User, Project]
        });
        res.status(200);
        if (results.length < 1) {
            res.send({ message: "Task not found" })
        } else {
            res.send(results);
        }
    } catch (e) {
        res.send({
            error: "resource not found"
        })
    }
});

router.post('/', async (req, res) => {
    let task = await Task.create({
        name: req.body.name,
        description: req.body.description,
        score: req.body.score,
        status: req.body.status,
        assigner: req.body.assigner,
        project_id: req.body.project
    })
    res.status(200);
    res.send(task);
})

router.delete("/:id", async (req, res) => {
    try {
        const operation = Task.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(202);
        res.send(operation);
    } catch (error) {
        res.send(error);
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const update = await Task.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200);
        res.send(Task.findOne({
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

//Implement assigning of Tasks

export default router;