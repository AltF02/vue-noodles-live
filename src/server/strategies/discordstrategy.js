const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');
const DiscordUser = require('../models/DiscordUser')

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await DiscordUser.findById(id);
    if (user) done(null, user);
});

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify', 'guilds']
},  async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await DiscordUser.findOne({ user_id: profile.id });
        if(user) {
            console.log("User exists.");
            done(null, user)
        }
        else {
            console.log("User does not exist");
            const newUser = await DiscordUser.create({
                user_id: profile.id,
            });
            const saveUser = await newUser.save()
            done(null, saveUser)
        }
    }
    catch (e) {
        console.log(e)
        done(e, null)
    }
}));
