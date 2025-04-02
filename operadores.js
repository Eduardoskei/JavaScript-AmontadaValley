const nota1 = 7;
const nota2 = 9;
const nota3 = 5;
const nota4 = 6;

const faltas = 5

const soma = nota1 + nota2 + nota3 + nota4;
const media = soma/4;

    
if (media < 7 || faltas > 4){
    console.log('Estudante Reprovado.')    
}else{
    console.log('Estudante Aprovado.')    
}

