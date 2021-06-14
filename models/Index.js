const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const PostComment = require('./PostComment');

// A post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// A comment belongs to a single user
Comment.belongsTo(User, {
  through: {
    model: PostComment,
  },
});

//Post belongs to many comments??
Post.belongsToMany(Comment, {
  through: {
    model: PostComment,
  },
});

module.exports = {
  User,
  Post,
  Comment,
};
