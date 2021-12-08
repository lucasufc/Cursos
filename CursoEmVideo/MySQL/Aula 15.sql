use cadastro;
describe gafanhotos;

alter table gafanhotos
	add column cursopreferido int;

alter table gafanhotos
	add foreign key(cursopreferido)
	references cursos(idcurso);
    
select * from gafanhotos;
select * from cursos;

update gafanhotos set cursopreferido = '6' where id = '1';
#não pode pois o curso 6 já está sendo usado
delete from cursos where (idcurso = '6');

#pode pois ninguem usa o curso 16
delete from cursos where (idcurso = '28');

select nome, cursopreferido from gafanhotos;

select nome, ano from cursos;

select gafanhotos.nome, cursos.nome, cursos.ano
	from gafanhotos join cursos
    on cursos.idcurso = gafanhotos.cursopreferido
    order by gafanhotos.nome;

select g.nome, c.nome, c.ano
	from gafanhotos as g  inner join cursos as c
    on c.idcurso = g.cursopreferido
    order by g.nome;
    
select g.nome, c.nome, c.ano
	from gafanhotos as g  left outer join cursos as c
    on c.idcurso = g.cursopreferido
    order by g.nome;
    
select g.nome, c.nome, c.ano
	from gafanhotos as g  right outer join cursos as c
    on c.idcurso = g.cursopreferido
    order by g.nome;