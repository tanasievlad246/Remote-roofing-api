import { Model } from 'sequelize';
import User from './User';
import AssignedProject from './assignedproject';

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'asigner' });
      this.belongsTo(AssignedProject);
    }
  };
  Project.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    score: DataTypes.INTEGER,
    status: DataTypes.STRING,
    asigner: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};