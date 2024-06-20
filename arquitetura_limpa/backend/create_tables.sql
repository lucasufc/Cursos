DROP DATABASE IF EXISTS arqhex;
CREATE DATABASE arqhex;

\c arqhex

create extension if no EXISTS "uuid-ossp"

create table usuarios (
    id uuid primary key,
    nome varchar(255) not null,
    email varchar(255) not null,
    senha varchar(255) not null,
);