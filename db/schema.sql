CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    burgers_id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(100),
    devoured BOOLEAN DEFAULT FALSE,

    PRIMARY KEY(burgers_id)
);