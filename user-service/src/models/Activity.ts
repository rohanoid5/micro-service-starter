import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/config";

enum ActivityType {
  RUNNING = "running",
  WALKING = "walking",
  WEIGHT_TRAINING = "weight_training",
}

enum ActivityStatus {
  NOT_STARTED = "not_started",
  ONGOING = "ongoing",
  PAUSED = "paused",
  COMPLETED = "completed",
}

interface ActivityAttributes {
  id: number;
  name: string;
  type: ActivityType;
  status: ActivityStatus;
  duration?: number;
  start_time?: Date;
  end_time?: Date;
  user_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creation
interface ActivityCreationAttributes
  extends Optional<ActivityAttributes, "id"> {}

// Create model class
class Activity
  extends Model<ActivityAttributes, ActivityCreationAttributes>
  implements ActivityAttributes
{
  public id!: number;
  public name!: string;
  public type!: ActivityType;
  public status!: ActivityStatus;
  public duration?: number;
  public start_time?: Date;
  public end_time?: Date;
  public user_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
// Init model
Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("running", "walking", "weight_training"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("not_started", "ongoing", "paused", "completed"),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Activity",
    tableName: "Activities",
  }
);

export default Activity;
