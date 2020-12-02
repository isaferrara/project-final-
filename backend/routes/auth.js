const express = require('express');
const router = express.Router();
const User = require('../models/User');
const passport = require('../config/serializers');
const { isAuth } = require('../middlewares')

const { googleInit, googleCb, currentUser } = require('../controllers/auth')
// Bcrypt to encrypt passwords

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json({ user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

router.get('/current-user', currentUser)

router.get('/google', googleInit)

router.get('/google/callback', googleCb)


module.exports = router;
