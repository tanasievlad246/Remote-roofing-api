import { Model } from 'sequelize';
import Project from "./Project";
import Task from "./Task";
import AssignedTask from "./assignedtask";
import AssignedProject from "./assignedproject";

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate ({ Project, Task, AssignedTask, AssignedProject }) {
      this.hasMany(Project, { foreignKey: 'id' });
      this.hasMany(Task, { foreignKey: 'id' });
      this.belongsToMany(Task, { through: AssignedTask });
      this.belongsToMany(Project, { through: AssignedProject, as: "ProjectAssignees" });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};