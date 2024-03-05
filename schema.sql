CREATE DATABASE notesapp;
USE notesapp;

CREATE Table notes(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL;
    contents TEXT NOT NULL;
    created TIMESTAMP NOT NULL DEFAULT NOW();
);

INSERT INTO notes(title,contents) 
VALUES 
('First Note','This is my First Note'),
('Second Note','This is my Second Note');