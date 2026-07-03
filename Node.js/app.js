const http = require('http')

const express = require('express')

const app = express()

//const routes = require('./routes')

app.use('/',(req, res, next) => {
    console.log('This allways runs')
    next()
})

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware')
    res.send('<h1>Add Product Page</h1>')
})

app.use('/',(req, res, next) => {
    console.log('In another middleware')
    res.send('<h1>Hello from Express</h1>')
})

const server = http.createServer(app)

server.listen(3000)