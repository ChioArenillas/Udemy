const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

//const expressHbs = require('express-handlebars') // Para usar Handlebars

const app = express()

//Si usas Hanslebars
// app.engine('hbs', expressHbs({
//     layoutsDir: 'views/layout/', 
//     defaultLayout: 'main-layout', 
//     extname: 'hbs'
// }))

app.set('view engine', 'ejs')
app.set('views', 'views') //el primer views es el nombre de la carpeta "views"

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000)