var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'CoverLetterAI',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });

router.get('/coverletterai-app', requiresAuth(), function (req, res, next) {
  res.render('coverletterai-app', {
    title: 'CoverletterAI App',
  });
  
});

module.exports = router;
