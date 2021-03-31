import { Model } from 'sequelize';
import Project from './Project';
import User from './User';
import AssignedTask from './assignedtask';
import AssignedProject from './assignedproject';

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Project, AssignedTask }) {
      this.belongsTo(User, { foreignKey: 'asigner' });
      this.belongsTo(Project, { foreignKey: 'project' });
      this.belongsToMany(User, { through: AssignedTask, as: "assignees" });
    }
  };
  Task.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.INTEGER,
    /**
     * Status: Active, Inactive, Declined, Completed
     */
    status: DataTypes.STRING,
    asigner: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    project: {
      type: DataTypes.UUID,
      references: {
        model: Project,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};