const notas = [10, 8.5, 5, 6.5, 8, 7.5];

// for (let i = 0 ; i < notas.length ; i++){
//     alert(`indice: ${i}. Valor: ${notas[i]}`);
// }



let somaNotas = 0;

for (let i = 0 ; i < notas.length ; i++){
    somaNotas = somaNotas + notas[i];
}

alert(`A media das notas é: ${somaNotas / notas.length}`);