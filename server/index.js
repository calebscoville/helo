require ('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
ctrl = require('./controller')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    saveUnitialized: false,
    resave: false,
    cookie: {
        maxage: 1000 * 60 * 60
    }
}))

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`july12 proptoMP ${SERVER_PORT}`))
})