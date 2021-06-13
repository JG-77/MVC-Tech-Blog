const router = require('express').Router();
const Post = require('../models/Post');
const User = require('../models/User');

//get home page with all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const postData = posts.map((post) => post.get({ plain: true }));
    console.log(posts);
    console.log(postData);
    res.render('home', { postData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  const posts = [
    {
      id: 1,
      content: 'new post here',
      title: 'Sample title',
      publish_date: '2016-02-01 00:00:00+00:00',
      user_id: '1',
      comments: [
        {
          id: 1,
          content: 'first comm',
          publish_date: '2016-02-01 00:00:00+00:00',
          user_id: 1,
        },
      ],
    },
  ];
  try {
    res.render('post', { post: posts[req.params.id - 1] });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get dashboard where user's post display

// get new post template

// POST new blog post

//get specific user post

// PUT --> update a saved blog post

// DELETE --> delete user's blog post

// get other user's existing post

//POST comment on blog post

// get login page
router.get('/login', async (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get sign up page
router.get('/signup', async (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }
  try {
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
