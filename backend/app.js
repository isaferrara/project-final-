require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/serializers');
const MongoStore = require('connect-mongo')(session);

mongoose
  .connect(process.env.DB || 'mongodb://localhost/backend', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Enable authentication using session + passport
app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}))

app.use(cors({
  origin: [process.env.FRONTENDPOINT],
  credentials: true
}))

//('./config')(app);
require('./config/serializers');
//require('./config/localStrategy');
require('./config/googleStrategy')

  app.use(passport.initialize());
  app.use(passport.session());


app.use(express.static('public/build'))

const index = require('./routes/index');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/auth', auth);

// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;
