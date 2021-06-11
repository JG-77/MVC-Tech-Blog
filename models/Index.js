const Post = require('./Post');
const User = require('./User');

// A User can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});

// A post belongs to a single user
Post.belongsTo(User, {
  foreignKey: 'user_id',
});
