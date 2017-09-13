var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require("body-parser");
var exphbs = require('express-handlebars');
var routes = require('./controllers/burgers_controller.js');
const db = require('./models');
const sequelize = require('sequelize');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
// Sets up the Express app to handle data parsing
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// app.use(methodOverride("_method"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


// Static directory

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/", routes);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});