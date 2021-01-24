CREATE TABLE products(
	prod_id serial NOT NULL PRIMARY KEY,
	prod_name VARCHAR(50) NOT NULL,
	prod_price int NOT NULL,
	prod_photo VARCHAR(500) NOT NULL,
	prod_category VARCHAR(50) NOT NULL
)

INSERT INTO products(prod_name, prod_price, prod_photo, prod_category) VALUES ('Lenovo', 1090, 'lenovo.png', 'laptop');
INSERT INTO products(prod_name, prod_price, prod_photo, prod_category) VALUES ('HP Pro', 1200, 'hp.png', 'laptop');
INSERT INTO products(prod_name, prod_price, prod_photo, prod_category) VALUES ('Toshiba', 980, 'toshiba.png', 'laptop');
SELECT * FROM products
SELECT * FROM products WHERE prod_id = 2

UPDATE products SET prod_price = 1000 WHERE prod_id = 1 

DELETE FROM products WHERE prod_id = 4
DROP TABLE products