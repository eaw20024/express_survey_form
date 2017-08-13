// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
})
// post route for adding a data from a survey
app.post('/results', function(req, res) {
    console.log("POST DATA \n\n", req.body);
    submitted_info = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        dojo_location: req.body.dojo_location,
        fav_language: req.body.fav_language,
    };
    res.render("results",{results: submitted_info});
})

app.listen(8000, function() {
 console.log("listening on port 8000");
});
