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
    static associate(models) {
      this.hasOne(User, { foreignKey: 'user_id' });
      this.hasOne(Project, { foreignKey: 'project_id' });
      this.hasOne(Task, { foreignKey: 'task_id' });
    }
  };
  AssignedTask.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    user_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    task_id: {
      type: DataTypes.UUID,
      references: {
        model: Task,
        key: 'id'
      }
    },
    project_id: {
      type: DataTypes.UUID,
      references: {
        model: Project,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AssignedTask',
  });
  return AssignedTask;
};