const express = require('express')
const exphbs = ('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.create)
app.set('view engine', 'handlebars')