import Sequelize from 'sequelize';
import db from '../config/config';

const Task = db.define('Task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    score: Sequelize.INTEGER,
    status: Sequelize.STRING,
    assigner: Sequelize.STRING,
    project_id: Sequelize.INTEGER
}, {
    timestamps: false,
    tableName: 'tasks'
})

export default Task;