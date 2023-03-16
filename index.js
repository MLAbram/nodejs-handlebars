// resources
// https://www.youtube.com/watch?v=T4Y3dj1nysk&t=900

const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const hbs = require('hbs')
const v1_hbs = require('./routes/v1_hbs');

hbs.registerPartials(__dirname + '/views', function (err) {})

app.set('view engine', 'hbs')
app.set('trust proxy', 1) // trust first proxy

app.use(express.static('html'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser('secret'))
app.use(session({cookie: {path: '/', httpOnly: true, secure: false, maxAge: null, secure: false}}))
app.use('/', v1_hbs);

// app.use((req, res, next) => {
//   res.redirect('/')
// })

app.listen(3000, () => {
  console.log('Server listening on port: 3000.')
})