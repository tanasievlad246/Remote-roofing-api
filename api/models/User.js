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

User.hasMany(Task, { foreignKey: 'assigner' })
User.hasMany(Project, { foreignKey: 'assigner' })

Project.belongsTo(User, { foreignKey: 'assigner' })
User.hasOne(Project, { foreignKey: 'assigner' })

User.belongsTo(Task, { foreignKey: 'assigner' })

Task.hasOne(User, { foreignKey: 'assigner' })
export default User;