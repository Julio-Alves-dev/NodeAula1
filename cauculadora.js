
function adicao(n1,n2){
    return(n1+n2)
}

function subitracao(n1,n2){
    return(n1-n2)
}

function multiplicacao(n1,n2){
   return( n1*n2)
}

function divisao(n1,n2){
    return(n1/n2)
}

const respSoma  = adicao(12,8)
const respMultiplicar = multiplicacao(respSoma, 3)
const dividir = divisao(10,2)
const subitrair = subitracao(respMultiplicar,dividir)

console.log(`o resultado e da conta e de:${subitrair}`)