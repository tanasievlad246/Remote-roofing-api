import Sequelize from 'sequelize';
import db from '../config/config';
import Task from '../models/Task';
import Project from '../models/Project';

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
}, {
    timestamps: false,
    tableName: 'users'
})

/**
 * Model Relations
 */
Project.belongsTo(User, { foreignKey: 'assigner' })
User.hasOne(Project, { foreignKey: 'assigner' })

Task.belongsTo(User, { foreignKey: 'assigner' })
User.hasOne(Task, { foreignKey: 'assigner' })

Task.belongsTo(Project, { foreignKey: 'project_id' })

export default User;