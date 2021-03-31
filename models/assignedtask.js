import { Model } from 'sequelize';
import User from './user';
import Task from './task';
import Project from './project';


module.exports = (sequelize, DataTypes) => {
  class AssignedTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task }) {
      // this.hasMany(Task, { foreignKey: 'TaskId', through: AssignedTask });
      // this.belongsToMany(AssignedTask, { foreignKey: 'id', through: AssignedTask });
      // this.hasMany(User, { foreignKey: 'UserId', through: AssignedTask });
    }
  };
  // TODO: Change name to TaskAssignees
  // TODO: Add name, surname and email of assignees
  AssignedTask.init({
    UserId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    TaskId: {
      type: DataTypes.UUID,
      references: {
        model: Task,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AssignedTask',
  });
  return AssignedTask;
};