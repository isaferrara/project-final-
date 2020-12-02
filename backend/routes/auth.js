const express = require("express");
const passport = require('passport');
const router = express.Router();

const { isAuth } = require('../middlewares')
const { signup, login, logout, loggedIn, edit, googleInit, googleCb } = require('../controllers/auth')
// Bcrypt to encrypt passwords


router.post("/login", login);


router.post("/signup", signup);

router.get('/loggedIn', loggedIn)

router.get("/logout",isAuth, logout);

router.post("/edit/:id",isAuth, edit)

router.get('/google', googleInit)

router.get('/google/callback', googleCb)

router.get('/profile', isAuth, (req, res, next) => {
    User.findById(req.user._id)
      .then((user) => res.status(200).json({ user }))
      .catch((err) => res.status(500).json({ err }));
  });


module.exports = router;
