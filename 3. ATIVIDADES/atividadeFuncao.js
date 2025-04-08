const prompt = require('prompt-sync')()

const calc = (n1, n2, operacao) => {
    switch(operacao){
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
        case '/':
            return n1 / n2;
        default:
            return 'Os parâmetros digitados são inválidos.'
    }
}

console.log(calc(10, 5, '+'))
console.log(calc(10, 5, '-'))
console.log(calc(10, 5, '*'))
console.log(calc(10, 5, '/'))
console.log(calc(10, 5, '1'))





const FahrenheitTocelsius = function (temp){
    return (5/9) * (temp - 32)
}

const temp = prompt('Digite o valor a ser convertido: ')
console.log(FahrenheitTocelsius(temp).toFixed(1))