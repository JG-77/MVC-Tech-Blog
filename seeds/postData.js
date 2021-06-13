const Post = require('../models/Post');

const postData = [
  {
    id: 1,
    title: 'Blog Post1',
    content: 'sample content text',
    publish_date: 'September 22, 2021 22:00:00',
    user_id: 2,
  },
  {
    id: 2,
    title: 'Blog title sample2',
    content: 'sample text for post',
    publish_date: 'June 22, 2021 09:00:00',
    user_id: 3,
  },
  {
    id: 3,
    title: 'Title example3',
    content: 'filler text goes here',
    publish_date: 'March 19, 2021 19:00:00',
    user_id: 1,
  },
];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;
