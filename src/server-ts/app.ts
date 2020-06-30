import dotenv from 'dotenv';
dotenv.config()
import { v4 as uuid } from 'uuid';
import express from 'express';
import session from 'express-session'
import passport from 'passport';
import './strategies/discordStrategy'
const db = require('./database/database');

const app = express();
const PORT = process.env.PORT || 3001;
db.then(() => console.log('Connected to mongodb')).catch((err: any) => console.log(err))

// Routes
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const apiRoute = require('./routes/api')


app.use(session({
    secret: uuid(),
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    name: 'discord.oath2',
    resave: true,
}))

// Passport
app.use(passport.initialize());
app.use(passport.session());


// Static files
app.use('/', express.static(__dirname + '/build'));


// Middleware Routes
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute)
app.use('/api', apiRoute)

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`)
});
