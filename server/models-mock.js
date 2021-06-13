import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        sruname: DataTypes.STRING,
        email: DataTypes.STRING
    }, {
        modelName: 'User',
        timestamps: false
    });
    return User;
};

'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Task.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        score: DataTypes.INTEGER,
        status: DataTypes.STRING,
        project: {
            type: DataTypes.INTEGER,
            references: {
                model: Project,
                key: 'id'
            }
        }
    }, {
        sequelize,
        timestamps: false,
        modelName: 'Task',
    });
    return Task;
};

import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
    class Project extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    project.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },,
        name: DataTypes.STRING,
        body: DataTypes.TEXT,
        status: DataTypes.STRING,
        assigner: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    }, {
        timestamps: false,
        modelName: 'Project'
    });
    return Project;
};