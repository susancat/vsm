const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      passport = require('passport'),
      keys = require('./config/keys');

app.use(express.json());

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

app.get('/', function(req, res){
    res.send("VSM!!!!!!")
  });
app.get('*', function(req, res){
    res.status(404).render('404');
});

app.listen(process.env.PORT || 5000, function(){
    console.log("React VSM has started");
});