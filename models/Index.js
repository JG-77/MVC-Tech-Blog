const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const PostComment = require('./PostComment');

// A user can have many posts
// User.hasMany(Post, {
//   foreignKey: 'user_id',
// });

// A post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// A user can have many comments
// User.hasMany(Comment, {
//   through: {
//     model: PostComment,
//     //unique: false,
//   },
// });

// A comment belongs to a single user
Comment.belongsTo(User, {
  through: {
    model: PostComment,
    //unique: false,
  },
});

module.exports = {
  User,
  Post,
  Comment,
};
