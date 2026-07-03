const express = require('express')

const app = express()

app.use('/users',(req, res, next) => {
    console.log('This is users middleware')
    res.send('<h1>Users Page</h1>')
})

app.use('/',(req, res, next) => {
    console.log('First middleware')
    res.send('<h1>Main Page</h1>')
})


app.listen(3000)