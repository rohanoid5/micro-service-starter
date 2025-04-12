import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/db";

// Define attributes
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creation
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Create model class
class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Init model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
  },
);

export default User;
