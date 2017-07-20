DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(50) NOT NULL,
  department_name VARCHAR(50),
  price INT(11) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ();

-- SELECT*FROM bid_items;
-- DELETE FROM bid_items WHERE categeory = "cat";