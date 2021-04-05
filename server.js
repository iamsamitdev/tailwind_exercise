const express = require("express")
const expressLayouts = require('express-ejs-layouts')
const app = express()
const http = require('http')
var reload = require('reload')

// Static Files
app.use(express.static('public'));

// Set View's
app.use(expressLayouts)
app.set('layout','./layouts/full-width')
app.set('views','./views')
app.set('view engine', 'ejs')

// Set Routes
app.get("/", function (req, res) {
    res.render("pages/exercise1/index", {title: 'Exercise 1'})
})

app.get("/exercise-2", function (req, res) {
    res.render("pages/exercise2/index", {title: 'Exercise 2'})
})

app.get("/exercise-3", function (req, res) {
    res.render("pages/exercise3/index", {title: 'Exercise 3'})
})

app.get("/exercise-4", function (req, res) {
    res.render("pages/exercise4/index", {title: 'Exercise 4'})
})

app.get("/exercise-5", function (req, res) {
    res.render("pages/exercise5/index", {title: 'Exercise 5'})
})

const server = http.createServer(app)
const PORT = process.env.PORT || 5500

server.listen(PORT, ()=> console.log("server start on port:"+PORT))

reload(app)