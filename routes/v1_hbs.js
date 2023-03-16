const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

// handlebars message middleware
app.use((req, res, next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/login', (req, res) => {
  res.status(200).render('login')
})

app.post('/login', (req, res) => {
  if (req.body.email == '' || req.body.password == '') {
    req.session.message = {
        type: 'danger',
        title: 'Error: ',
        message: 'Please Try Again...'
    }

    res.status(200).redirect('login')
  } else {
    console.log(req.body)

    req.session.message = {
      type: 'success',
      title: 'Welcome: ',
      message: 'Welcome Back...'
    }

    res.status(200).redirect('login')
  }
})

module.exports = app;