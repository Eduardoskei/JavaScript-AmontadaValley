// 1.1
const negativoOuPositivo = (num) => {
    if (num > 0){
        return (`O número ${num} é Positivo.`);
    }else if (num < 0){
        return (`O número ${num} é Negativo.`);
    }else{
        return ('O número é 0.');
    }
}

// 1.2
const parOuImpar = (num) => num % 2 == 0? `O número ${num} é Par` : `O número ${num} é Ímpar`

console.log(negativoOuPositivo(0))
console.log(parOuImpar(2))

