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
    res.render("pages/exercise1/index", {title: 'Exercise 1', page_name: 'exercise1'})
})

app.get("/exercise-2", function (req, res) {
    res.render("pages/exercise2/index", {title: 'Exercise 2', page_name: 'exercise2'})
})

app.get("/exercise-3", function (req, res) {
    res.render("pages/exercise3/index", {title: 'Exercise 3', page_name: 'exercise3'})
})

app.get("/exercise-4", function (req, res) {
    res.render("pages/exercise4/index", {title: 'Exercise 4', page_name: 'exercise4'})
})

app.get("/exercise-5", function (req, res) {
    res.render("pages/exercise5/index", {title: 'Exercise 5', page_name: 'exercise5'})
})

app.get("/exercise-6", function (req, res) {
    res.render("pages/exercise6/index", {title: 'Exercise 6', page_name: 'exercise6'})
})

app.get("/exercise-7", function (req, res) {
    res.render("pages/exercise7/index", {title: 'Exercise 7', page_name: 'exercise7'})
})

app.get("/exercise-8", function (req, res) {
    res.render("pages/exercise8/index", {title: 'Exercise 8', page_name: 'exercise8'})
})

app.get("/exercise-9", function (req, res) {
    res.render("pages/exercise9/index", {title: 'Exercise 9', page_name: 'exercise9'})
})

app.get("/exercise-10", function (req, res) {
    res.render("pages/exercise10/index", {title: 'Exercise 10', page_name: 'exercise10'})
})

app.get("/exercise-11", function (req, res) {
    res.render("pages/exercise11/index", {title: 'Exercise 11', page_name: 'exercise11'})
})

app.get("/exercise-12", function (req, res) {
    res.render("pages/exercise12/index", {title: 'Exercise 12', page_name: 'exercise12'})
})

const server = http.createServer(app)
const PORT = process.env.PORT || 5500

server.listen(PORT, ()=> console.log("server start on port:"+PORT))

reload(app)