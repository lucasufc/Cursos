use cadastro;
/* Agregação */

select * from cursos
	where nome like 'P%';
    
select * from cursos
	where nome like '%A';
    
select * from cursos
	where nome like '%A%';
    
select * from cursos
	where nome not like '%A%';
    
update cursos set nome = 'PáOO' where idcurso = 9;
update cursos set nome = 'POO' where idcurso = 9;

select * from cursos
	where nome like 'ph%p';
    
select * from cursos
	where nome like 'ph%p%';
    
select * from cursos
	where nome like 'ph%p%_';

select * from cursos
	where nome like 'p__t%';
select * from gafanhotos
	where nome like '%silva%';
    
select distinct carga from cursos
order by carga;

select * from cursos where carga > 40;
select count(*) from cursos where carga > 40;

select max(carga) from cursos;

select max(totaulas) from cursos where ano = '2016';
select nome, min(totaulas) from cursos where ano = '2016';
select sum(totaulas) from cursos where ano = '2016';
select avg(totaulas) from cursos where ano = '2016';

select nacionalidade from gafanhotos;
select distinct nacionalidade from gafanhotos
order by nacionalidade;

# Ex01
select nome from gafanhotos where sexo = 'F';

# Ex02
select * from gafanhotos where nascimento > '2000-01-01' and nascimento < '2015-12-31';

# Ex03
select  * from gafanhotos where sexo = 'M' and profissao = 'Programador';

# Ex04
select * from gafanhotos where sexo = 'F' and nacionalidade = 'Brasil' and nome like 'J%';

# Ex05
select nome, nacionalidade from gafanhotos where not nacionalidade = 'Brasil' and peso < 100 and nome like '%silva%';

# Ex06
select max(altura) from gafanhotos where sexo = 'M' and nacionalidade = 'Brasil';

# Ex07
select avg(peso) from gafanhotos;

# Ex08
select min(peso) from gafanhotos where nascimento > '1990-01-01' and nascimento < '2000-12-31' and not nacionalidade = 'Brasil';

# Ex09
select count(altura) from gafanhotos where sexo = 'F' and altura > 1.90;
