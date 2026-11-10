// index.js - seu primeiro script execultado no node

// 1) guarde o nome do curso em um constante 
const curso = "node.js e APIs"

// 2) crie uma função que monta a saudação
function saudacao(nome){
    return`Boas-vindas ao curso de ${curso}, ${nome}!`
}

// 3) mostre o resultado
console.log(saudacao("Turma"));