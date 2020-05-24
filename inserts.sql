CREATE DATABASE IF NOT EXISTS pedidoArticulo CHARACTER SET 'UTF8' COLLATE 'utf8_general_ci';

CREATE TABLE clientes(
id_cliente MEDIUMINT AUTO_INCREMENT,
nombre VARCHAR(20),
apellido1 VARCHAR(20),
apellido2 VARCHAR(20) NULL,
usuario VARCHAR(20) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(29) NOT NULL UNIQUE,
poblacion VARCHAR(100),
fecha_registro DATE,
CONSTRAINT pk_clientes PRIMARY KEY (id_cliente));

INSERT INTO clientes (nombre, apellido1, apellido2, usuario, email, password, poblacion, fecha_registro) VALUES ("Jano", "Soler", "Diaz", "Jano", "jano@gmail.com", "solerdiaz", "castellon", curdate());

CREATE TABLE admin(
id_admin MEDIUMINT AUTO_INCREMENT,
nombre VARCHAR(20),
apellido1 VARCHAR(20),
apellido2 VARCHAR(20) NULL,
usuario VARCHAR(20) NOT NULL UNIQUE,
email VARCHAR(50) NOT NULL UNIQUE,
password VARCHAR(29) NOT NULL UNIQUE,
poblacion VARCHAR(100),
fecha_registro DATE,
CONSTRAINT pk_admin PRIMARY KEY (id_admin));

INSERT INTO admin (nombre, apellido1, apellido2, usuario, email, password, poblacion, fecha_registro) VALUES ("Diego", "Martinez", "Diaz", "Diego", "diego@gmail.com", "martinezdiaz", "Castellon", curdate());

CREATE TABLE pedidos(
id_pedido MEDIUMINT AUTO_INCREMENT,
id_cliente MEDIUMINT,
cantidad MEDIUMINT,
fecha_pedido DATE,
CONSTRAINT pk_pedidos PRIMARY KEY (id_pedido),
CONSTRAINT fk_pedidos FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente));

CREATE TABLE articulos (
id_articulo MEDIUMINT AUTO_INCREMENT,
descripcion VARCHAR(200),
categoria VARCHAR(50),
stock MEDIUMINT,
precio FLOAT,
imagen MEDIUMBLOB,
CONSTRAINT pk_articulos PRIMARY KEY (id_articulo));

INSERT INTO articulos (descripcion, categoria, stock, precio, imagen)
VALUES ("pantalones cortos de hombre Treviso Joma", "ropa deportiva", "8", "5.60", "1.webp"), 
("malla de mujer boomerang", "ropa deportiva", "10", "4.75", "2.webp"), 
("malla pirata de mujer boomerang", "ropa deportiva", "11", "5.35", "3.webp"),
("zapatillas de running de hombre Revolution 5 Nike", "zapatillas", "8", "29.95", "4.webp"),
("zapatillas de running de hombre Air Zoom Vomero 14", "zapatillas", "14", "83.95", "5.webp"),
("zapatillas de running de mujer Zoom Fly 3 Nike", "zapatillas", "7", "159.95", "6.webp"),
("alianza de oro amarillo Mio", "joyeria", "3", "280", "7.webp"),
("anillo David Locco Rimbaud estilo sello con baño de oro", "joyeria", "5", "138", "8.webp"),
("gargantilla tous chain en plata de primera ley", "joyeria", "11", "25", "9.webp"),
("figuras serie 17 playmobil", "juguetes", "20", "1.69", "10.webp"),
("maletin grande dinosaurios y explorador playmobil", "juguetes", "11", "12", "11.webp"),
("coche de policia con lancha playmobil city action", "juguetes", "15", "29.25", "12.webp"),
("la chica de nieve (tapa blanda)", "libros", "25", "17.95", "13.webp"),
("y julia reto a los dioses (tapa dura)", "libros", "20", "21.75", "14.webp"),
("la madre de frankenstein (tapa blanda)", "libros", "18", "21.75", "15.webp");

CREATE TABLE detalle_pedidos(
id_pedido MEDIUMINT,
id_articulo MEDIUMINT,
pedidos_entregados BOOLEAN,
pedidos_en_proceso BOOLEAN,
pedidos_enviados BOOLEAN,
CONSTRAINT pk_detalle_pedidos PRIMARY KEY (id_pedido, id_articulo),
CONSTRAINT fk_detalle_pedidos1 FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido),
CONSTRAINT fk_detalle_pedidos2 FOREIGN KEY (id_articulo) REFERENCES articulos (id_articulo));
