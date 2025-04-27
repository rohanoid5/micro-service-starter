import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/config";

interface GPSTrackingAttributes {
  id: number;
  current_time: Date;
  pace?: number;
  elevation?: number;
  distance?: number;
  heartbeat?: number;
  latitude?: number;
  longitude?: number;
  activity_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Optional fields for creation
interface GPSTrackingCreationAttributes
  extends Optional<GPSTrackingAttributes, "id"> {}

// Create model class
class GPSTracking
  extends Model<GPSTrackingAttributes, GPSTrackingCreationAttributes>
  implements GPSTrackingAttributes
{
  public id!: number;
  public current_time!: Date;
  public pace?: number;
  public elevation?: number;
  public distance?: number;
  public heartbeat?: number;
  public latitude?: number;
  public longitude?: number;
  public activity_id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
// Init model
GPSTracking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    current_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    pace: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    elevation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    heartbeat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
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
    modelName: "GPSTracking",
    tableName: "GPSTrackings",
  }
);

export default GPSTracking;
