CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

