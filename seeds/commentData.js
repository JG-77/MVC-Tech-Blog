const Comment = require('../models/Comment');

const commentData = [
  {
    id: 1,
    content: 'nice post!!',
    publish_date: 'December 21, 2021 20:30:00',
    user_id: 1,
  },
  {
    id: 2,
    content: 'keep it up!',
    publish_date: 'April 20, 2021 07:00:00',
    user_id: 3,
  },
  {
    id: 3,
    content: 'awesome job',
    publish_date: 'March 19, 2021 19:00:00',
    user_id: 2,
  },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;
