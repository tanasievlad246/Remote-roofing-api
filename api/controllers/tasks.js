import express from 'express';
import { Op } from 'sequelize';
import { User, Task, Project, AssignedTask } from '../../models/index';

const router = express.Router();

/**
 * Get all tasks
 * TODO: One must be able to filter by name, description, 
 * status array (boolean OR operation filter), 
 * name/surname of the assigner, 
 * name/surname/id of the assignee(s) and by score
 */
router.get('/', async (req, res) => {
    let results = await Task.findAll({
        include: [User, Project, {
            model: User,
            as: "assignees",
            through: { attributes: [] } // Excludes relation from the response
        }]
    });
    res.status(200);
    res.send(results);
});

router.get('/:id', async (req, res) => {
    try {
        let results = await Task.findAll({
            where: {
                id: req.params.id
            }
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
        asigner: req.body.asigner,
        project: req.body.project
    })
    res.status(200);
    res.send(task);
})

/**
 * Assign a task to a user
 */
router.post('/assign', async (req, res) => {
    let assign = await AssignedTask.create({
        UserId: req.body.user_id,
        TaskId: req.body.task_id
    })
    res.status(200);
    res.send(assign);
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