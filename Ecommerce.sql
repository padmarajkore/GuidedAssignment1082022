create database Ecommerce;

use Ecommerce;


create table Product
(
id BIGINT primary key,
sku VARCHAR(255),
Proname VARCHAR(255),
description VARCHAR(255),
unitprice DECIMAL(13,2),
imageurl VARCHAR(255),
unitsinstock INT,
datecreated DATE,
lastupdated DATE,
categoryid BIGINT,
foreign key(categoryid) references category(categoryid)
);

insert into Product values(10001,"12345678","Laptop","HP Laptop",100000,"www.laptopimg",10,"2022-10-11","2022-11-11",1001);

insert into category values(1001,"Electronics");
insert into category values(1002,"Accsessories");
select * from product;
select * from category;

create table category
(
categoryid BIGINT primary key,
categoryname VARCHAR(255)
);

ALTER TABLE Product MODIFY id int NOT NULL AUTO_INCREMENT;