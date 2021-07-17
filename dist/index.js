const router = require('express').Router(),
  { Post, User, Comment } = require('../models/Index'),
  checkAuthentication = require('../utils/authentication');
router.get('/', async (a, b) => {
  try {
    const c = await Post.findAll({
        include: [{ model: User, attributes: ['username'] }],
      }),
      d = c.map((a) => a.get({ plain: !0 }));
    b.render('home', { postData: d, loggedIn: a.session.loggedIn });
  } catch (a) {
    console.log(a), b.status(500).json(a);
  }
}),
  router.get('/post/:id', async (a, b) => {
    try {
      const c = await Post.findByPk(a.params.id, {
        include: [
          {
            model: Comment,
            attributes: ['content', 'publish_date', 'user_id'],
            include: [User],
          },
          { model: User, attributes: ['username'] },
        ],
      });
      if (!c)
        return void b.status(404).json({ message: 'No post with ID found' });
      const d = c.get({ plain: !0 });
      b.render('post', { posts: d, loggedIn: a.session.loggedIn });
    } catch (a) {
      console.log(a), b.status(500).json(a);
    }
  }),
  router.get('/dashboard', checkAuthentication, async (a, b) => {
    try {
      const c = await Post.findAll({ where: { user_id: a.session.id } }),
        d = c.map((a) => a.get({ plain: !0 }));
      b.render('dashboard', { userPost: d, loggedIn: !0 });
    } catch (a) {
      b.status(500).json(a), console.log(a);
    }
  }),
  router.get('/dashboard/:id', checkAuthentication, async (a, b) => {
    try {
      const c = await Post.findByPk(a.params.id, {
        include: [{ model: User, attributes: ['username'] }],
      });
      if (!c)
        return void b.status(404).json({ message: 'No post with ID found' });
      const d = c.get({ plain: !0 });
      b.render('dashboard', { dash: d, loggedIn: !0 });
    } catch (a) {
      b.status(500).json(a);
    }
  }),
  router.get('/newpost', checkAuthentication, async (a, b) => {
    try {
      b.render('new-post', { loggedIn: !0 });
    } catch (a) {
      b.status(500).json(a);
    }
  }),
  router.get('/login', async (a, b) => {
    try {
      if (a.session.loggedIn) return void b.redirect('/');
      b.render('login');
    } catch (a) {
      console.log(a), b.status(500).json(a);
    }
  }),
  router.get('/signup', async (a, b) => {
    try {
      if (a.session.loggedIn) return void b.redirect('/');
      b.render('signup');
    } catch (a) {
      console.log(a), b.status(500).json(a);
    }
  }),
  (module.exports = router);
