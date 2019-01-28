mysql -u root -p -h todolistdb.ckd1euttq9g2.eu-west-2.rds.amazonaws.com^C

show databases;
use todolist;
CREATE TABLE User (
    UserId int NOT NULL AUTO_INCREMENT,
    Username varchar(255) NOT NULL,
    PRIMARY KEY (UserId)
);

INSERT INTO User (Username)
VALUES ('Susan');

INSERT INTO User (Username)
VALUES ('Geoff');

CREATE TABLE Tasks (
    TaskId int NOT NULL AUTO_INCREMENT,
    Description varchar(255) NOT NULL,
    Completed BIT,
    UserId int,
    PRIMARY KEY (TaskId),
    FOREIGN KEY (UserId) REFERENCES User(UserId)
);

INSERT INTO Tasks (Description, Completed, UserId)
VALUES ('Learn JavaScript', 0, 2);

INSERT INTO Tasks (Description, Completed, UserId)
VALUES ('Learn MySQL', 0, 2);

INSERT INTO Tasks (Description, Completed, UserId)
VALUES ('Learn NodeJS', 0, 1);

//Selecting Susan's Tasks
SELECT *
FROM Tasks
WHERE UserId = 1;

//Selecting Geoff's Tasks
SELECT *
FROM Tasks
WHERE UserId = 2;

//Changed datatype of Completed column from BIT to text
ALTER TABLE Tasks
MODIFY COLUMN Completed varchar(255);

//Update all tasks to completed = 'false', repeated code below but changed the TaskId
UPDATE Tasks
SET Completed = 'false'
WHERE TaskId = 1;

//Changed Geoff's task completed status to 'true'
UPDATE Tasks
SET Completed = 'true'
WHERE TaskId = 1;

//Selecting Geoff's Tasks
SELECT *
FROM Tasks
WHERE UserId = 2;

//Selecting Geoff's Incomplete Tasks
SELECT *
FROM Tasks
WHERE UserId = 2 AND Completed = 'false';

//Creating a table which joins the name from one table to their tasks in the tasks table and 
//displays only the username and their tasks which need completing
SELECT Username, Description
FROM User
CROSS JOIN Tasks
WHERE User.UserId = Tasks.UserId AND Tasks.Completed = 'false';