create database sgv;

drop table if exists estoque;
drop table if exists produto;

create table produto (
    id int PRIMARY KEY IDENTITY,
    nome varchar (30) UNIQUE NOT NULL,
    valor FLOAT NOT NULL,
    imagem varbinary (MAX)
);

insert into produto (nome, valor) values 
    ('Agua', 1.0),
    ('Cafe', 3.0),
    ('Refrigerante', 3.5),
    ('Suco', 4.0),
    ('Cerveja', 5.0);

