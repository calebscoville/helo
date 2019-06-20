const express = require('express'),
const session = require('express-session'),
const massive = require('massive')
ctrl = require('./controller')

const app = express()

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('database set')
    app.listen(SERVER_PORT, () => console.log(`july12 proptoMP ${SERVER_PORT}`))
})