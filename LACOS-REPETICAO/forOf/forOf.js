// let iterable = [10, 20, 30];

// for (let i of iterable){
//     console.log(i)
// }


// const frutas = ['Maça', 'Abacate', 'Tomate'];

// for (let fruta of frutas){
//     console.log(fruta)
// }

let somaNotas = 0;

for (let i of notas){
    somaNotas += notas;
}

alert(`A media das notas é: ${somaNotas / notas.length}`);