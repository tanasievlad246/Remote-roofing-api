import express from 'express';
import passport from 'passport';

const router = express.Router();

//FIXME: login not working
router.post("/login", passport.authenticate('local', {
    failureRedirect: "login-fail",
    successRedirect: "success-login"
}));

router.get('/login-fail', (req, res) => res.send(`<h1>Auth fail</h1>`));
router.get('/success-login', (req, res) => res.send(`<h1>Auth success</h1>`));

// Temporal frontend form to check requests from browser
router.get('/auth/:type', (req, res) => {
    if (req.params.type === 'register') {
        res.send(`
            <form action="/API/users" method="POST">
                <label for="email">email</label>
                <input name="email"/>
                <label for="password">password</label>
                <input name="password" type="password"/>
                <label for="name">name</label>
                <input name="name"/>
                <label for="surname">surname</label>
                <input name="surname"/>
                <button type=submit>Register</button>
            </form>
        `)
    } else if (req.params.type === 'login') {
        res.send(`
            <form action="/API/users/login" method="POST">
                <label>email</label>
                <input name="email"/>\
                <label>password</label>
                <input name="password" type="password"/>
                <button type=submit>Login</button>
            </form>
        `)
    }
});

export default router;