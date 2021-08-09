const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      cookieSession = require('cookie-session'),
      keys = require('./config/keys'),
      cors = require('cors');

require('./services/passport');

const authRoutes = require('./routes/auth');

app.use(express.json());
//must install CORS to enable user data fetch from node server side
app.use(
    cors({
         origin: "http://localhost:3000", // allow to server to accept request from different origin
         methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
         credentials: true, // allow session cookie from browser to pass through
   })
);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

const DATABASEURL=keys.mongoURI;
const LOCALDB="mongodb://localhost:27017/Quiz"
mongoose.connect(DATABASEURL || LOCALDB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true
});

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

app.get('/', function(req, res){
    res.send("VSM!!!!!!")
  });
app.get('*', function(req, res){
    res.status(404).render('404');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("React VSM has started");
});