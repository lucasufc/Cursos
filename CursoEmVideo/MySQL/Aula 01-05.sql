# Criando Database
create database cadastro
	default character set utf8
	default collate utf8_general_ci;

# Comandos Para criar / excluir um Database
create database meubanco;
drop database meubanco;


# use: Seleciona o Banco de Dados que desejo alterar
use cadastro;
# drop: Exclui um componente do DB
drop table pessoas;

create table pessoas (
	id int not null auto_increment,
	nome varchar(30) not null,
    nascimento date,
    sexo enum('M', 'F'),
    peso decimal(5, 2),
    altura decimal(3, 2),
    nacionalidade varchar(20) default 'Brasil',
    primary key (id)
)default charset = utf8;

use cadastro;
insert into pessoas
(nome, nascimento, sexo, peso, altura,nacionalidade)
values
('Godofredo', '1984-01-02', 'M', '78.5', '1.83', 'Brasil');

# seleciona todos os atributos de uma tablea
select * from pessoas;

insert into pessoas
	(nome, nascimento, sexo, peso, altura, nacionalidade)
values
	('Maria','1999-12-30','F', '55.2', '1.65', 'Portugal');
    
insert into pessoas
	(id, nome, nascimento, sexo, peso, altura, nacionalidade)
values
	(default, 'Creuza','1920-12-30','F', '50.2', '1.65', default);
    
insert into pessoas values 
	(default, 'Rogeria', '1930-01-2', 'F', '75.2', '1.63','Suecia'),
    (default, 'Lucas', '1930-11-2', 'M', '83.2', '1.75',default);