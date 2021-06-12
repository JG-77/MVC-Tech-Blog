const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostComment extends Model {}

// model to link Posts and Comments by id's
PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        //unique: false,
        key: 'id',
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        //unique: false,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_comment',
  }
);

module.exports = PostComment;
