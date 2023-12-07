const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express()

app.engine('handlebars', exphbs.create)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render('home');
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})

conn.connect(function(err) {
    if(err){
        console.log(err)
    }
    console.log('conectou ao MySql')

    app.listen(3000)
})