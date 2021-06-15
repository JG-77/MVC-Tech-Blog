// redirect to signup route if user is not signed in
const checkAuthentication = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect('/signup');
  } else {
    next();
  }
};

module.exports = checkAuthentication;
