const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors")
const mysql = require("mysql");
const app = express()

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}))
app.use(bodyParser.json())
const port = 3000
app.listen(port)

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "devuser",
    password: "Thisisit132",
    database: "Blockbuster",
})

conn.connect((err) => {
    if (err) {
        console.log(`Can't connect to database`)
        return;
    }
    console.log(`Connection is up and ruuning`)
})


app.get('/', (req, res) => {
    
    conn.query("SELECT * FROM Movies", (err, row) => {
        if (err) {
            console.log(err)
            return;
        } else {
            //console.log(JSON.parse(JSON.stringify(row)))
            let movies = JSON.parse(JSON.stringify(row))
            res.json(movies)
        }
    })
    
})























// app.get('/search/:name', (req, res) => {
//     let name = req.params.name
//     res.json(movies)
// })


