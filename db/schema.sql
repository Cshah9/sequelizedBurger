CREATE DATABASE burger_sequelized_db;

USE burgers_db;

CREATE TABLE burgers (
	id INTEGER(10) AUTO_INCREMENT,
	burger_name VARCHAR(25), 
	devoured BOOLEAN,
	date TIMESTAMP,
	PRIMARY KEY (id)
);
