var express = require('express');
var router =express.Router();
var burger = require("../models/burger.js");
var db = require("../models");

router.get('/', function(req,res) {
	console.log("burgers_controller.js GET /");
	db.Burger.findAll({}).then(function(dbBurger) {
 
      // res.json(dbBurger);
      res.render("index", {burgers: dbBurger});
    });
});



router.post('/', function(req,res) {

	console.log("burgers_controller.js Post");
	//console.log("res",res);


    db.Burger.create({
      burger_name: req.body.name,
      devoured: 0
    }).then(function(dbBurger) {
      res.redirect("/");
    });
    
});

router.put('/:id', function(req,res) {
	console.log("burgers_controller.js PUT /");
	console.log("req.param.id:",  req.params.id);

	db.Burger.update({
      devoured: 1
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
    });
	
});

module.exports = router;


