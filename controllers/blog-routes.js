const router = require('express').Router();
const { Post, User, Comment } = require('../models/');

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
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['content', 'publish_date', 'user_id'],
        },
        { model: User, attributes: ['username'] },
      ],
    });
    const posts = postData.get({ plain: true });

    console.log(posts);
    console.log(postData);
    res.render('post', { posts });
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
