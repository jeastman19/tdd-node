const bodyParser = require('body-parser')
const express = require('express')
const { posts } = require('./endpoints')
const { authenticate } = require('./middewares')
const services = require('./services')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const postsHandlers = posts(services)

app.post('/', authenticate, postsHandlers.post)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
