import passport from 'passport';
import passportLocal from 'passport-local';
import dbConnect from './dbconnect';;
import { validatePassword } from '../utils/passwordUtils';
import { User } from '../../models/index';

dbConnect();

const LocalStrategy = passportLocal.Strategy;

const verifyCallback = async (username, password, done) => {
    try {
        const user = await User.findOne({
            where: {
                email: username
            }
        });

        if (!user) {
            return done(null, false);
        }
    
        const isValid = validatePassword(password, user.hash, user.salt);
    
        if (isValid) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        done(err);
    }
}

const strategy = new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, verifyCallback); 

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
    try {
        const user = await User.findOne({
            where: {
                id: userId
            }
        });

        done(null, user);
    } catch (error) {
        done(err);
    }
});