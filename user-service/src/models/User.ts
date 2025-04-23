import { DataTypes, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";
import sequelize from "../config/config";

// Define attributes
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  role?: string;
  age?: number;
  gender?: string;
  date_of_birth?: Date;
  height?: number;
  weight?: number;
  height_unit?: string;
  weight_unit?: string;
  profile_picture?: string;
  password: string;
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
  public role?: string;
  public password!: string;
  public age?: number;
  public gender?: string;
  public date_of_birth?: Date;
  public height?: number;
  public weight?: number;
  public height_unit?: string;
  public weight_unit?: string;
  public profile_picture?: string;
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
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height_unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weight_unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
  }
);

User.beforeCreate(async (user: User) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

export default User;
