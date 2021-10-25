/*
 * Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
 * num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
 * com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas. 
 */
function recerberMelhorEstudante(turma) {
    let estudante = {}
    let media, i = 0 
    for(let aluno in turma) {
        media = 0
        for(nota in turma[aluno]) {
            media += turma[aluno][nota]/ turma[aluno].length
        }
        if(i == 0 || media > estudante['media']){
            estudante['nome'] = aluno
            estudante['media'] = media
        }
        ++i
    }
    return estudante
    
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    })) // retornará { nome: "Mariana", media: 7.875 }