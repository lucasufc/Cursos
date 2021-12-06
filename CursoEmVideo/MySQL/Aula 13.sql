use cadastro;

# Agrupando
select carga, count(nome) from cursos group by carga;
select carga, count(nome) from cursos where totaulas = 30 group by carga;

select * from cursos where totaulas = 30;

select ano, count(*) from cursos
	group by ano 
	having count(ano) >= 5
	order by count(*) desc;
    
select ano, count(*) from cursos
	where totaulas > 30
	group by ano 
	having ano > 2013
	order by count(*) desc;
    
select avg(carga) from cursos;

select carga, count(*) from cursos
	where ano > 2015
    group by carga
    having carga > (select avg(carga) from cursos);

select * from gafanhotos;
    
# Ex01
select profissao, count(profissao) from gafanhotos
	group by profissao
    order by count(profissao) desc;
    
# Ex02
select sexo, count(*) from gafanhotos
	where nascimento > '2005-01-01'
	group by sexo;
    
# Ex03
select nacionalidade, count(nacionalidade) from gafanhotos
	where not nacionalidade = 'Brasil'
    group by nacionalidade
    having count(nacionalidade) > 3
    order by count(nacionalidade) desc;

# Ex04
select altura, count(*) from gafanhotos
where peso > 100 and altura > (select avg(altura) from gafanhotos)
group by altura;

/*
select altura, count(*) from gafanhotos
where peso > 100
group by altura
having altura > (select avg(altura) from gafanhotos);
*/