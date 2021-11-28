use cadastro;

select * from gafanhotos;
select * from cursos;
# Crescente 
select * from cursos
	order by nome;
select * from cursos
	order by nome asc;
    
# Decrescente 
select * from cursos
	order by nome desc;

#Selecionando colunas
select nome, carga, ano from cursos
	order by nome;
    
#Odernando mais de uma coluna
select ano, nome, carga from cursos
	order by ano, nome;
    
#Selecionando Linhas
select * from cursos
	where ano= '2016'
	order by nome;
# Selecionando Linhas
select nome, descricao, carga from cursos
	where ano='2016'
	order by nome;
select nome, descricao, carga,ano from cursos
	where ano<='2015'
	order by ano, nome;
    
#Selecioando intervalos
select nome, descricao, carga,ano from cursos
	where ano between 2014 and 2016
	order by ano desc, nome;
select nome, descricao, carga,ano from cursos
	where ano in(2014, 2016, 2020)
	order by ano desc, nome;
    
select nome, carga, totaulas from cursos
	where carga > 35 and totaulas < 30;
    
select nome, carga, totaulas from cursos
	where carga > 35 or totaulas < 30;