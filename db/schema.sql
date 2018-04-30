CREATE DATABASE tasks_db;

USE tasks_db;

CREATE TABLE tasks (
	id INTEGER NOT NULL AUTO_INCREMENT,
	task_name VARCHAR (200),
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)

);