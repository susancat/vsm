const passport = require('passport');
const LocalStrategy = require("passport-local");
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const keys = require('../config/keys');
const User = require("../models/User");

passport.serializeUser((user,done) => {
    done(null, user.id);
});

// passport.deserializeUser((id, done) => {
//     User.findById(id)
//     .then(user =>{
//         done(null, user);
//     });
// });
passport.deserializeUser(function(id, done) {
    User.login(id, function(err, user) {
     if(err) return done(err, null);
     done(err, user);
    });
 });
 
passport.use(new LocalStrategy(User.authenticate()));

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: keys.callback,
    proxy:true
}, async (accessToken, refreshToken, profile, done) => {
  // console.log(profile)
  const existingUser = await User.findOne({ googleid: profile.id });
  
  if(existingUser) {
      done(null, existingUser);
  } else {
      //new model instance
      const user = await new User({ googleid: profile.id, username:profile.displayName }).save();
      done(null, user);
  }
}
)
);