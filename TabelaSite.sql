create database crud_api;
use crud_api;

 
create table users(
	id int not null auto_increment primary key,
    name varchar(255) not null,
    email varchar(255) not null unique,
    password varchar(255) not null,
    status enum('usuario','adm') default ('usuario'),
    created_id timestamp default current_timestamp
);

CREATE TABLE products (
    id int not null auto_increment primary key,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    price varchar(255) NOT NULL
);

CREATE TABLE favorites (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

insert into users(name, email, password, status) values("cleber", "cleber@gmail.com", "220208", "adm");

alter table products add column imagem_link varchar(255);

insert into products(name, description, price, imagem_link) values("Bite Burger", "Desfrute de um delicioso milkshake apenas aquecendo essa pílula azul no micro-ondas. Cremoso e refrescante!", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Spinach Boost", "Obtenha a força do Popeye com essa pílula verde que se transforma em uma saudável lata de espinafre no micro-ondas.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Crisp Pop", "Crocantes e irresistíveis! Coloque a pílula vermelha e branca no micro-ondas e obtenha uma lata cheia de Pringles.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Chicken Delight", "Um delicioso frango assado em minutos. Coloque a pílula amarela no micro-ondas e aproveite!", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Grimace Treat", "Comemore com um doce especial de aniversário do Grimace ao aquecer essa pílula roxa no micro-ondas.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Rice Genie", "Para um arroz perfeito e soltinho, coloque a pílula branca no micro-ondas e veja a magia acontecer.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Pork Feast", "Um suculento prato de carne de porco é o que você terá ao aquecer essa pílula rosa e lilás no micro-ondas.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Choco Bliss", "Delicie-se com um bolo de chocolate quente e macio, preparado em minutos com essa pílula marrom no micro-ondas.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Cotton Cloud", "Sinta-se em um parque de diversões com algodão doce fresco e colorido ao aquecer a pílula azul e rosa no micro-ondas.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Classic Duo", "Para um clássico arroz com feijão, aqueça essa pílula preta e branca no micro-ondas e tenha uma refeição completa.", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg"),
("Golden Nugget", "Crocantes pedaços de frango empanado são revelados ao colocar essa pílula dourada no micro-ondas. Simplesmente delicioso!", "25,99", "https://www.shutterstock.com/image-vector/example-stamp-red-rubber-on-260nw-2420575109.jpg");

select * from products;
drop database crud_api;

	
