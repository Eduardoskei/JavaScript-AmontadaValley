const prompt = require('prompt-sync')()

// const grades = [10, 6.5, 8, 7.5];

// console.log(`Notas: ${grades}`);

// console.log(grades.push(10))

// console.log(`Notas atualizadas: ${grades}`);


const grades = [];

for (let i = 1; i <= 4; i++){
    const grade = parseFloat(prompt(`Digite usa nota [${i}/4]: `));
    grades.push(grade);
}

console.log(`Esses são os elementos da sua lista: ${grades}`)
console.log(`Esse é o tamanho da sua lista: ${grades.length}`)