const PostComment = require('../models/PostComment');

const postCommentData = [
  {
    post_id: 1,
    comment_id: 1,
  },
  {
    post_id: 2,
    comment_id: 3,
  },
  {
    post_id: 3,
    comment_id: 2,
  },
];

const seedPostCommentData = () => PostComment.bulkCreate(postCommentData);

module.exports = seedPostCommentData;
