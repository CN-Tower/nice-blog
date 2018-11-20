import passport from 'passport';
import LocalStrategy from 'passport-local';
import User from '../models/user';

passport.use(new LocalStrategy.Strategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, async (email, password, done) => {
  try {
    const user = await User.findOne({email: email});
    if(!user || !user.validPassword(password)){
      return done(null, false, {errors: {'email or password': 'is invalid'}});
    }
    return done(null, user);
  } catch (err) {
    return done(null, user);
  }
}));

