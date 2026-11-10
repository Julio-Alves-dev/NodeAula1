// media-notas.js - calculando a média de um aluno

//Um objeto guarda dados relacionados sobre coisas (aqui,o  aluno)
const aluno = {
    nome: "Ana Paula",
    nota1: 7.5,
    nota2: 8.0,
};

// A função soma duas notas e devolve a media
function media(n1,n2){
   return(n1 + n2)/2 
}

const mediaFinal = media(aluno.nota1, aluno.nota2)

console.log(mediaFinal);
console.log(mediaFinal.toFixed(1));

const nomeAluno = `${aluno.nome}: media ${mediaFinal.toFixed(1)}`

console.log(nomeAluno)