#desc/ describe mostra os campos da tabela selecionada
describe pessoas;

# adicionando coluna a tablea
alter table pessoas
	add column profissao varchar(10);

## Comandos para modificar colunas
# Para adicionar
alter table pessoas
	add column profissao varchar(10) after nome;
    
alter table pessoas
	add column codigo int first;

# Para modificar uma coluna já existente 
alter table pessoas
	modify column profissao varchar(20) not null default '';

alter table pessoas
	drop column profissao;
    
alter table pessoas
	change column profissao prof  varchar(20);

select * from pessoas;

# Comando para renomear a tabela por completo
alter table pessoas
	rename to gafanhotos;
desc gafanhotos;


create table if not exists cursos (
	nome varchar(30) not null unique,
    descricao text,
    cargaHoraria int unsigned,
    totAulas int unsigned,
    ano year default '2021'
) default charset = utf8;

alter table cursos
	add column idcurso int first;

alter table cursos
	add primary key (idcurso);
    
    
create table if not exists texte (
	id int,
    nome varchar(10),
    idade int
);

insert into teste value 
	('1', 'Pedro', '22'),
    ('2', 'Maria', '21');
    
select * from teste;

drop table if exists teste;