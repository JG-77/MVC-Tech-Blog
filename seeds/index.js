const sequelize = require('../config/connection');
const seedUserData = require('./userData');
const seedCommentData = require('./commentData');
const seedPostData = require('./postData');
const seedPostCommentData = require('./postCommentData');

const seedAllData = async () => {
  await sequelize.sync({ force: true });

  await seedUserData();

  await seedCommentData();

  await seedPostData();

  await seedPostCommentData();

  process.exit(0);
};

seedAllData();
