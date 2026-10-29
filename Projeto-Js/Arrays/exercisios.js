/* Comece com uma fila vazia. Chegam Ana, Bia e Caio (nessa ordem). Atenda o primeiro da fila. Depois chega Duda com atendimento prioritário, que deve ir para o início. Mostre a fila a cada etapa.

Saída esperada: `[ 'Ana', 'Bia', 'Caio' ]`, depois `[ 'Bia', 'Caio' ]`, depois `[ 'Duda', 'Bia', 'Caio' ]` */

// const fila = [];

// fila.push("Ana");
// fila.push("Bia");
// fila.push("Caio");
// console.log(fila);

// fila.shift();
// console.log(fila);

// fila.unshift("Duda");
// console.log(fila);

/* Crie `remover(lista, valor)` que remove o valor da lista (se existir) e devolve `true` se removeu ou `false` se não achou.

Exemplo: `remover(["a", "b", "c"], "b")` devolve `true` e a lista vira `[ 'a', 'c' ]` */
//------------------------------------------------------------------------------------------------------------------------------------------------------
// function remover(lista, valor) {
//     const pos = lista.indexOf(valor);

//     if (pos === -1) {
//         return false;
//     }
    
//     lista.splice(pos, 1);
//     return true;
// }

// const hardware = ["SSD", "RAM", "HD"];
// console.log(remover(hardware, "RAM"));
// console.log(hardware);
// console.log(remover(hardware, "CPU"));

//------------------------------------------------------------------------------------------------------------------------------------------

/*  Crie um objeto `aluno` com `nome` e `idade`. Depois: altere a idade, acrescente `curso`, remova a `idade` e mostre as chaves que sobraram.

Saída esperada: `[ 'nome', 'curso' ]` */

// const aluno = {nome:"lucas", idade:27};

// aluno.idade = 28;
// aluno.curso = "front-end";
// console.log(aluno);

// delete aluno.idade;
// console.log(aluno);
// console.log(Object.keys(aluno));
//-------------------------------------------------------------------------------------------------------------------------------------------------------------


// Dado um array de alunos `{ nome, nota }`, crie `mediaTurma(alunos)` e `melhorAluno(alunos)` (devolve o objeto do aluno com a maior nota).

// **Exemplo:* com Ana 8, Bia 5.5 e Caio 7 → média `6.833...` e melhor aluno `{ nome: 'Ana', nota: 8 }`

// function mediaTurma(alunos) {
//     let soma = 0;
//     for (const aluno of alunos) {
//         soma += aluno.nota;
//     }
//     return soma / alunos.length;
// }

// function melhorAluno(alunos) {
//  let melhor = alunos [0];
//  for (const aluno of alunos) {
//     if (aluno.nota > melhor.nota) {
//         melhor = aluno;
//     }
//  }

//  return melhor;
// }

// const turma = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bia", nota: 5.5 },
//   { nome: "Caio", nota: 7 },
// ];

// console.log(mediaTurma(turma).toFixed(2));
// console.log(melhorAluno(turma));


// //Filter, Map, Find e Reduce;

// function dobro(n) { // Junior
//     return n * 2;
// }

// const dobroArrow = (n) => { // Pleno
//     return n * 2;
// }

// const dobroCurto = n => n * 2; // Senior

// ----------------------------------------------------------------------------

//FILTER ------- 

const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
const joao = { name: "João", lastName: "Silva", age: 18 };
const ana = { name: "Ana", lastName: "Santos", age: 22 };
const people = [lucas, maria, joao, ana];

console.log("=== FILTER===");

const maiores = people.filter((value, index, array) => {
    console.log("Index", index);
    console.log("value", value.name);
    console.log("------------------")
    return value.age >= 18;

});

console.log ("Resultado filter:", maiores);



console.log("=====MAP====");

const nomes = people.map((value, index, array) => {
    console.log("Index", index);
    console.log("value", value.name);
    return value.name;
});

console.log("Resultado map", nomes);

console.log ("===FIND===");

const mariaEncontrada = people.find((value, index, array) => {
  console.log("index", index);
  console.log("Value", value.name);
  return value.name === "Maria";
});

console.log("Resultado find:", mariaEncontrada);

const pedro = people.find(p => p.name === "pedro");
console.log(pedro);
if (pedro === undefined) {
   console.log("pessoa nao encontrada");
}

console.log ("=====REDUCE====");

//array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {

//}, valorInicial);

const somaIdades = people.reduce((acc, value, index, array)=> {
  console.log("index", index);
  console.log("Value", value.name, value.age);
  console.log("Acumulador antes:", acc);
  return acc + value.age;
}, 0);
console.log("Resultado reduce:", somaIdades);

const nomesMaiores = people
.filter(p => p.age >= 18)
.map(p => p.name.toUpperCase());

console.log(nomesMaiores);

const somaMaiores = people
.filter(p => p.age >= 18)
.reduce((acc, p) => acc + p.age, 0);

console.log(somaMaiores);
