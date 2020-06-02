import Sequelize from 'sequelize';
import db from '../config/config';
import Task from './Task'
import Project from './Project'

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    projects_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        references: {
            model: Project,
            key: 'id'
        }
    },
    tasks_id: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
        references: {
            model: Task,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    tableName: 'users'
})



export default User;