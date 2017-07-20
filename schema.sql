DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price INT(11) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Laptop computer", "Electronics", 1500, 20);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Personal mirror", "Self-care", 10, 40);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Printer", "Electronics", 100, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Standing desk", "Office", 2000, 10);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Shredder", "Office", 100, 50);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("12 pack of pens - black ink", "Office", 15, 100);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Cigar", "Leisure", 100, 30);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Black headphones - wired", "Electronics", 50, 200);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bubble bath soap", "Self-care", 7, 300);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Fidget spinners", "Leisure", 10, 500);

SELECT * FROM products;