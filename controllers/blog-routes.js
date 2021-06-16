const router = require('express').Router();
const { Post, User, Comment } = require('../models/');
const checkAuthentication = require('../utils/authentication');

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
    res.render('home', { postData, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//shows post by id
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: ['content', 'publish_date', 'user_id'],
          include: [User],
        },
        { model: User, attributes: ['username'] },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: 'No post with ID found' });
      return;
    }
    const posts = postData.get({ plain: true });

    res.render('post', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get dashboard where user's post display
router.get('/dashboard', checkAuthentication, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const postData = await Post.findAll({
      where: { user_id: req.session.id },
    });

    const userPost = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      userPost,
      loggedIn: true,
    });
    // console.log(userData);
    // console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get new post template

// POST new blog post

//get specific user post
router.get('/dashboard/:id', checkAuthentication, async (req, res) => {
  try {
    const userPostData = await Post.findByPk();

    if (!userPostData) {
      res.status(404).json({ message: 'No post with ID found' });
      return;
    }

    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT --> update a saved blog post

// DELETE --> delete user's blog post

// get other user's existing post

//POST comment on blog post

// get login page
router.get('/login', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get sign up page
router.get('/signup', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
