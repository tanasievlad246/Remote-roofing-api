import { Model } from 'sequelize';
import User from './User';
import Project from './Project';

module.exports = (sequelize, DataTypes) => {
  class AssignedProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  // TODO: Change name to ProjectAssignees
  // TODO: Add name, surname and email of assignees
  AssignedProject.init({
    UserId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    },
    ProjectId: {
      type: DataTypes.UUID,
      references: {
        model: Project,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'AssignedProject',
  });
  return AssignedProject;
};