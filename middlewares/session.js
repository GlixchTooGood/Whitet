const session = require('express-session');


const sessionMiddleware = session({
    name: "cookie",
    secret: process.env.cookieSecret,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 3 * 24 * 60 * 60 * 1000 }
})

module.exports = sessionMiddleware