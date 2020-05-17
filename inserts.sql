CREATE DATABASE IF NOT EXISTS pedidoProductos;

CREATE TABLE clientes(
id_cliente MEDIUMINT AUTO_INCREMENT,
nombre VARCHAR(20),
apellido1 VARCHAR(20),
apellido2 VARCHAR(20) NULL,
usuario VARCHAR(20) NOT NULL UNIQUE,
email VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR(29) NOT NULL UNIQUE,
direccion VARCHAR(100),
CONSTRAINT pk_clientes PRIMARY KEY (id_cliente));

INSERT INTO clientes (nombre, apellido1, apellido2, usuario, email, password, direccion) VALUES ("Jano", "Soler", "Diaz", "Jano", "jano@gmail.com", "solerdiaz", "calle amapolas 30")

CREATE TABLE pedidos(
id_pedido MEDIUMINT AUTO_INCREMENT,
id_cliente MEDIUMINT,
fecha_pedido DATE,
CONSTRAINT pk_pedidos PRIMARY KEY (id_pedido),
CONSTRAINT fk_pedidos FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente));

CREATE TABLE articulos (
id_articulo MEDIUMINT AUTO_INCREMENT,
descripcion VARCHAR(200),
categoria VARCHAR(50),
stock MEDIUMINT,
precio FLOAT,
CONSTRAINT pk_articulos PRIMARY KEY (id_articulo));

INSERT INTO articulos (descripcion, categoria, stock, precio)
VALUES ("pantalones cortos de hombre Treviso Joma", "ropa deportiva", "8", "5.60"), 
("malla de mujer boomerang", "ropa deportiva", "10", "4.75"), 
("malla pirata de mujer boomerang", "ropa deportiva", "11", "5.35"),
("zapatillas de running de hombre Revolution 5 Nike", "zapatillas", "8", "29.95"),
("zapatillas de running de hombre Air Zoom Vomero 14", "zapatillas", "14", "83.95"),
("zapatillas de running de mujer Zoom Fly 3 Nike", "zapatillas", "7", "159.95"),
("alianza de oro amarillo Mio", "joyeria", "3", "280"),
("anillo David Locco Rimbaud estilo sello con baño de oro", "joyeria", "5", "138"),
("gargantilla tous chain en plata de primera ley", "joyeria", "11", "25"),
("figuras serie 17 playmobil", "juguetes", "20", "1.69"),
("maletin grande dinosaurios y explorador playmobil", "juguetes", "11", "12"),
("coche de policia con lancha playmobil city action", "juguetes", "15", "29.25"),
("la chica de nieve (tapa blanda)", "libros", "25", "17.95"),
("y julia reto a los dioses (tapa dura)", "libros", "20", "21.75"),
("la madre de frankenstein (tapa blanda)", "libros", "18", "21.75")

CREATE TABLE detalle_pedidos(
id_pedido MEDIUMINT,
id_articulo MEDIUMINT,
cantidad MEDIUMINT,
pedidos_entregados BOOLEAN,
pedidos_en_proceso BOOLEAN,
pedidos_enviados BOOLEAN,
CONSTRAINT pk_detalle_pedidos PRIMARY KEY (id_pedido, id_articulo),
CONSTRAINT fk_detalle_pedidos1 FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido),
CONSTRAINT fk_detalle_pedidos2 FOREIGN KEY (id_articulo) REFERENCES articulos (id_articulo));