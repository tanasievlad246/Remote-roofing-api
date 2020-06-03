import Sequelize from 'sequelize';
import db from '../config/config';
import User from './User';
import Task from '../models/Task';

const Project = db.define('Project', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: Sequelize.STRING,
    body: Sequelize.STRING,
    status: Sequelize.STRING,
    assigner: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'projects'
})

// Task.hasOne(Project, { foreignKey: 'project_id' })
// Project.belongsTo(Task, { foreignKey: 'project_id' })

export default Project;