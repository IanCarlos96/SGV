create database sgv;

drop table if exists estoque;
drop table if exists produto;

create table produto (
    id int PRIMARY KEY IDENTITY,
    nome varchar (30) UNIQUE NOT NULL,
    valor FLOAT NOT NULL,
    imagem varbinary (MAX)
);

create table estoque (
    id int PRIMARY KEY IDENTITY,
    id_produto int FOREIGN KEY REFERENCES produto (id),
    quantidade FLOAT NOT NULL
);

insert into produto (nome, valor) values 
    ('Agua', 1.0),
    ('Cafe', 3.0),
    ('Refrigerante', 3.5),
    ('Suco', 4.0),
    ('Cerveja', 5.0);

insert into estoque (id_produto, quantidade) VALUES
    (1, 25.0),
    (2, 5.5),
    (3, 20.0),
    (4, 0.0),
    (5, 100.0);