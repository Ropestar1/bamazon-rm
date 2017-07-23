DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price INT(11) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  product_sales INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE departments (
  department_id INT(11) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  over_head_costs INT(11) NOT NULL,
  PRIMARY KEY (department_id)
);

-- Initial products
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Laptop computer", "Electronics", 1500, 20, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Personal mirror", "Self-care", 10, 40, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Printer", "Electronics", 100, 30, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Standing desk", "Office", 2000, 10, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Shredder", "Office", 100, 50, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("12 pack of pens - black ink", "Office", 15, 4, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Cigar", "Leisure", 100, 30, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Black headphones - wired", "Electronics", 50, 200, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Bubble bath soap", "Self-care", 7, 3, 0);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Fidget spinners", "Leisure", 10, 500, 0);

-- Initial departments values
INSERT INTO departments(department_name, over_head_costs)
VALUES ("Electronics", 10000);

INSERT INTO departments(department_name, over_head_costs)
VALUES ("Office", 2000);

INSERT INTO departments(department_name, over_head_costs)
VALUES ("Self-care", 500);

INSERT INTO departments(department_name, over_head_costs)
VALUES ("Leisure", 1000);

SELECT * FROM products;
SELECT * FROM departments;