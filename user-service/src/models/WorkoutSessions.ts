import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/config";

// 1. Define the TypeScript interface for attributes
interface WorkoutSessionAttributes {
  id: number;
  current_time?: Date;
  title?: string;
  sets?: number;
  repetitions?: number[];
  duration?: number;
  perceived_difficulty?: string;
  average_heartbeat?: number;
  max_heartbeat?: number;
  activity_id: number;
  created_at?: Date;
  updated_at?: Date;
}

// 2. Optional fields when creating
interface WorkoutSessionCreationAttributes
  extends Optional<
    WorkoutSessionAttributes,
    | "id"
    | "current_time"
    | "title"
    | "sets"
    | "repetitions"
    | "duration"
    | "perceived_difficulty"
    | "average_heartbeat"
    | "max_heartbeat"
    | "created_at"
    | "updated_at"
  > {}

// 3. Define the Sequelize Model
class WorkoutSession
  extends Model<WorkoutSessionAttributes, WorkoutSessionCreationAttributes>
  implements WorkoutSessionAttributes
{
  public id!: number;
  public current_time?: Date;
  public title?: string;
  public sets?: number;
  public repetitions?: number[];
  public duration?: number;
  public perceived_difficulty?: string;
  public average_heartbeat?: number;
  public max_heartbeat?: number;
  public activity_id!: number;
  public readonly created_at?: Date;
  public readonly updated_at?: Date;
}

// 4. Initialize the model
WorkoutSession.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    current_time: {
      type: DataTypes.DATE,
    },
    title: {
      type: DataTypes.STRING,
    },
    sets: {
      type: DataTypes.INTEGER,
    },
    repetitions: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    duration: {
      type: DataTypes.INTEGER,
    },
    perceived_difficulty: {
      type: DataTypes.STRING,
    },
    average_heartbeat: {
      type: DataTypes.INTEGER,
    },
    max_heartbeat: {
      type: DataTypes.INTEGER,
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Activities",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "WorkoutSession",
    tableName: "WorkoutSessions",
  }
);

export default WorkoutSession;
