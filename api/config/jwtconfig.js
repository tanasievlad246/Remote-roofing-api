import passportJwt from 'passport-jwt';
import passport from 'passport';
import fs from 'fs';
import path from 'path';
import dbConnect from './dbconnect';
import { User } from '../../models/index';

// dbConnect();

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const Strategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256'],
    jsonWebTokenOptions: {
        maxAge: '1d'
    }
};

export default (passport) => {
    // The JWT payload is passed into the verify callback
    passport.use(new Strategy(options, async function (jwt_payload, done) {

        console.log(jwt_payload);

        // We will assign the `sub` property on the JWT to the database ID of user
        const user = await User.findOne({ id: jwt_payload.sub });

        if (!user) {
            return done(null, false, { message: "Error" });
        } else {
            return done(null, user);
        }
    }));
}
