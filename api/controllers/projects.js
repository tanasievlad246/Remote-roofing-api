import express from 'express';
import { User, Task, Project } from '../../models/index';


const router = express.Router();

router.get('/', async (req, res) => {
    let results = await Project.findAll({
        include: User
    });
    res.status(200);
    res.send(results);
});

router.get('/:id', async (req, res) => {
    try {
        let results = await Project.findAll({
            where: {
                id: req.params.id
            },
            include: User
        });
        res.status(200);
        if (results.length < 1) {
            res.send({
                message: "Project not found"
            })
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
    let project = await Project.create({
        name: req.body.name,
        body: req.body.body,
        status: req.body.status,
        assigner: req.body.assigner
    })
    res.status(200);
    res.send(project);
});

router.delete("/:id", async (req, res) => {
    try {
        const operation = Project.destroy({
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

router.patch("/:id", async (req, res) => {
    try {
        const update = await Project.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200);
        res.send(Project.findOne({
            where: {
                id: req.params.id
            }
        }));
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

//Implement assigning of Projects

export default router;