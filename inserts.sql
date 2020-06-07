CREATE DATABASE IF NOT EXISTS pedidoArticulo CHARACTER SET 'UTF8mb4';

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
rol varchar(10) not null,
CONSTRAINT pk_clientes PRIMARY KEY (id_cliente));

INSERT INTO clientes (nombre, apellido1, apellido2, usuario, email, password, poblacion, fecha_registro, rol) VALUES ("Jano", "Soler", "Diaz", "Jano", "jano@gmail.com", "solerdiaz", "castellon", curdate(), "admin"),("Diego","Diego","Diaz","Diego","diego@gmail.com","diego1","castellón","2020-04-02","cliente"),("Bob","Marley","Musical","Bob","bob@gmail.com","bob1","kingston","2020-02-20","cliente"),("Lisa","Simpson","Cientifica","Lisa","lisa@gmail.com","lisa","springsfield","2020-04-05","cliente"); 


CREATE TABLE pedidos(
id_pedido MEDIUMINT AUTO_INCREMENT,
id_cliente MEDIUMINT,
fecha_pedido DATE,
CONSTRAINT pk_pedidos PRIMARY KEY (id_pedido),
CONSTRAINT fk_pedidos FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente));

CREATE TABLE articulos (
id_articulo MEDIUMINT PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR(200),
stock MEDIUMINT,
precio FLOAT,
imagen varchar(20),
fecha date);

INSERT INTO articulos (descripcion, stock, precio, imagen, fecha) VALUES ("pantalones cortos de hombre Treviso Joma", 8, 5.60, "1.webp", CURDATE()),("malla de mujer boomerang", 10, 4.75, "2.webp", CURDATE()), ("malla pirata de mujer boomerang",  11, 5.35, "3.webp", CURDATE()),("zapatillas de running de hombre Revolution 5 Nike", 8, 29.95, "4.webp", CURDATE()),("zapatillas de running de hombre Air Zoom Vomero 14", 14, 83.95 , "5.webp", CURDATE()),("zapatillas de running de mujer Zoom Fly 3 Nike", 7, 159.95, "6.webp", CURDATE()),("alianza de oro amarillo Mio",3, 280, "7.webp", CURDATE()),("anillo David Locco Rimbaud estilo sello con baño de oro",  5, 138, "8.webp", CURDATE()),("gargantilla tous chain en plata de primera ley", 11, 25, "9.webp", CURDATE()),("figuras serie 17 playmobil", 20, 1.69, "10.webp", CURDATE()),("maletin grande dinosaurios y explorador playmobil",  11, 12, "11.webp", CURDATE()),("coche de policia con lancha playmobil city action",  15, 29.95, "12.webp", CURDATE()),("la chica de nieve (tapa blanda)", 25, 17.95, "13.webp", CURDATE()),("y julia reto a los dioses (tapa dura)", 20, 21.75, "14.webp", CURDATE()),("la madre de frankenstein (tapa blanda)", 18, 21.75, "15.webp", CURDATE()),("Camiseta de hombre Boomerang",3, 4.95, "16.webp", CURDATE()),("Camiseta de mujer Boomerang", 5, 12.95, "17.webp", CURDATE()),("Camiseta de manga corta de mujer Boomerang", 6, 4.95, "18.webp", CURDATE()),("Camiseta de mujer Boomerang", 9, 4.95, "19.webp", CURDATE()),("Camiseta de hombre Mountain PRO", 18, 5.55, "20.webp", CURDATE()),("Camiseta de hombre Dri-FIT Academy Nike", 6, 15.95, "21.webp", CURDATE()),("Camiseta de hombre Boomerang", 4, 5.95, "22.webp", CURDATE()),("Camiseta de hombre Sportswear Nike", 6, 20, "23.webp", CURDATE()),("Camiseta de hombre Boomerang", 8, 4.95, "24.webp", CURDATE()),("Camiseta de hombre AM. Classics Champion", 6, 23.95, "25.webp", CURDATE()),("Camiseta de hombre Graphic Shop Vintage Champion", 19, 13.95, "26.webp", CURDATE()),("Camiseta de niños adidas Originals", 23, 16.95, "27.webp", CURDATE()),("Camiseta de niña AM. Classics Champion", 12, 8.95, "28.webp", CURDATE()),("Camiseta de niña AM. Classics Champion", 6, 24.95, "29.webp", CURDATE()),("Camiseta de hombre Mountain PRO", 9, 9.05, "30.webp", CURDATE()),("Camiseta de hombre Tijuana", 10, 9.95, "31.webp", CURDATE()),("Camiseta de niña Boomerang", 14, 5.95, "32.webp", CURDATE()),("Camiseta de niña Boomerang", 4, 9.95, "33.webp", CURDATE()),("Camiseta de niños Joint Element", 15, 10 , "34.webp", CURDATE()), ("Camiseta de hombre Verhunt", 3, 10.45, "35.webp", CURDATE()),("Camiseta de mujer Boomerang", 5, 7.95, "36.webp", CURDATE());


CREATE TABLE detalle_pedidos(
id_pedido MEDIUMINT,
id_articulo MEDIUMINT,
cantidad MEDIUMINT,
pedidos_entregados BOOLEAN default false,
pedidos_en_proceso BOOLEAN default false,
pedidos_enviados BOOLEAN default false,
pedidos_guardados BOOLEAN default false,
CONSTRAINT pk_detalle_pedidos PRIMARY KEY (id_pedido, id_articulo),
CONSTRAINT fk_detalle_pedidos1 FOREIGN KEY (id_pedido) REFERENCES pedidos (id_pedido),
CONSTRAINT fk_detalle_pedidos2 FOREIGN KEY (id_articulo) REFERENCES articulos (id_articulo));

insert into pedidos (id_cliente, fecha_pedido) values (2, "2020-04-15"), (3, "2020-03-19"), (4, "2020-04-06"), (2, "2020-05-16"), (3, "2020-04-25"), (4, "2020-05-20");

insert into detalle_pedidos (id_pedido, id_articulo, cantidad, pedidos_en_proceso) values (1, 11, 1, true), (2, 4, 1, true), (3, 14, 1, true), (4, 2, 1,true), (5, 8, 1, true), (6, 11, 1, true);

CREATE TABLE categorias (
id_categoria MEDIUMINT AUTO_INCREMENT,
categoria VARCHAR(50),
CONSTRAINT pk_categorias PRIMARY KEY (id_categoria));

INSERT INTO categorias (categoria) VALUES ("ROPA DEPORTIVA"),("CALZADO DEPORTIVO"), ("JOYERIA"), ("JUGUETES"), ("LIBROS");

CREATE TABLE secciones_articulos (
id_categoria MEDIUMINT,
id_articulo MEDIUMINT,
CONSTRAINT pk_secciones_articulos PRIMARY KEY (id_categoria, id_articulo));

INSERT INTO secciones_articulos (id_categoria, id_articulo) VALUES (1,1),(1,2),(1,3),(2,4),(2,5),(2,6),(3,7),(3,8),(3,9),(4,10),(4,11),(4,12),(5,13),(5,14),(5,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,25),(1,26),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,33),(1,34),(1,35),(1,36),(1,37),(1,38),(1,39),(1,40),(1,41),(1,42),(1,43),(1,44),(1,45),(1,46),(1,47),(1,48),(1,49),(1,50),(1,51),(1,52),(1,53);
