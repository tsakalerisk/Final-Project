DROP TABLE IF EXISTS `people`;

CREATE TABLE people (
  `PersonID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `FirstName` VARCHAR(255) NOT NULL DEFAULT '',
  `LastName` VARCHAR(255) NOT NULL DEFAULT '',
  `Email` VARCHAR(255) NOT NULL DEFAULT ''
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

DROP TABLE IF EXISTS `items`;

-- ImageUrl is TEXT instead of VARCHAR so that we can store big urls
CREATE TABLE items (
  `ItemID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `Name` VARCHAR(255) NOT NULL,
  `Price` DECIMAL(10, 2) NOT NULL,
  `ImageUrl` TEXT
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

DROP TABLE IF EXISTS `orders`;

CREATE TABLE orders (
  `OrderID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `PersonID` INT UNSIGNED NOT NULL,
  `OrderDate` DATETIME NOT NULL,
  FOREIGN KEY (PersonID) REFERENCES people (PersonID)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

DROP TABLE IF EXISTS `order_details`;

CREATE TABLE order_details (
  `OrderDetailsID` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `OrderID` INT UNSIGNED NOT NULL,
  `ItemID` INT UNSIGNED NOT NULL,
  `Quantity` INT,
  FOREIGN KEY (OrderID) REFERENCES orders (OrderID),
  FOREIGN KEY (ItemID) REFERENCES items (ItemID)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

-- load mock data
LOAD DATA INFILE '/var/lib/mysql-files/people.csv'
INTO TABLE people
FIELDS TERMINATED BY ','
ENCLOSED BY "'"
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(FirstName, LastName, Email);

LOAD DATA INFILE '/var/lib/mysql-files/items.csv'
INTO TABLE items
FIELDS TERMINATED BY ','
ENCLOSED BY "'"
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(Name, Price, ImageUrl);

LOAD DATA INFILE '/var/lib/mysql-files/orders.csv'
INTO TABLE orders
FIELDS TERMINATED BY ','
ENCLOSED BY "'"
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(PersonID, OrderDate);

LOAD DATA INFILE '/var/lib/mysql-files/order_details.csv'
INTO TABLE order_details
FIELDS TERMINATED BY ','
ENCLOSED BY "'"
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(OrderID, ItemID, Quantity);