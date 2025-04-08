const prompt = require('prompt-sync')()

// const pets = ['Dog', 'Cat', 'Hamster'];

// console.log(pets.includes("Morcego"));
// console.log(pets.includes("Dog"));

// pets.includes('Cat') ? console.log(pets.indexOf('Cat')) : console.log("Esse bagui existe não louco.")

// console.log(pets.indexOf('Cat'));

const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const relacaoAlunoMedia = [alunos, medias];



// const ExibirNomeENota = (name) => {
//     if (relacaoAlunoMedia[0].includes(name)) {
//         const index = relacaoAlunoMedia[0].indexOf(name);
//         return `O aluno: ${relacaoAlunoMedia[0][index]} teve uma média de ${relacaoAlunoMedia[1][index]}`
//     }else{
//         console.log("O Estudante não existe")
//     }
// }

const ExibirNomeENota = (name) => {
    if (relacaoAlunoMedia[0].includes(name)) {
        return `O aluno: ${relacaoAlunoMedia[0][name]} teve uma média de ${relacaoAlunoMedia[1][relacaoAlunoMedia[0].indexOf(name)]}`
    }else{
        console.log("O Estudante não existe")
    }
}

const name = prompt('Digite o nome do aluno: ')

console.log(ExibirNomeENota(name))

