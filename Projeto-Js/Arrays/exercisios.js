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

// const lucas = { name: "Lucas", lastName: "Garcez", age: 20 };
// const maria = { name: "Maria", lastName: "Oliveira", age: 17 };
// const joao = { name: "João", lastName: "Silva", age: 18 };
// const ana = { name: "Ana", lastName: "Santos", age: 22 };
// const people = [lucas, maria, joao, ana];

// console.log("=== FILTER===");

// const maiores = people.filter((value, index, array) => {
//     console.log("Index", index);
//     console.log("value", value.name);
//     console.log("------------------")
//     return value.age >= 18;

// });

// console.log ("Resultado filter:", maiores);



// console.log("=====MAP====");

// const nomes = people.map((value, index, array) => {
//     console.log("Index", index);
//     console.log("value", value.name);
//     return value.name;
// });

// console.log("Resultado map", nomes);

// console.log ("===FIND===");

// const mariaEncontrada = people.find((value, index, array) => {
//   console.log("index", index);
//   console.log("Value", value.name);
//   return value.name === "Maria";
// });

// console.log("Resultado find:", mariaEncontrada);

// const pedro = people.find(p => p.name === "pedro");
// console.log(pedro);
// if (pedro === undefined) {
//    console.log("pessoa nao encontrada");
// }

// console.log ("=====REDUCE====");

// //array.reduce((acumulador, elementoAtual, indice, arrayOriginal) => {

// //}, valorInicial);

// const somaIdades = people.reduce((acc, value, index, array)=> {
//   console.log("index", index);
//   console.log("Value", value.name, value.age);
//   console.log("Acumulador antes:", acc);
//   return acc + value.age;
// }, 0);
// console.log("Resultado reduce:", somaIdades);

// const nomesMaiores = people
// .filter(p => p.age >= 18)
// .map(p => p.name.toUpperCase());

// console.log(nomesMaiores);

// const somaMaiores = people
// .filter(p => p.age >= 18)
// .reduce((acc, p) => acc + p.age, 0);

// console.log(somaMaiores);

//MAP

//Dado const nums =[1, 2, 3, 4, 5,], use map para criar um array com o dobro de cada número.

// const nums =[1, 2, 3, 4, 5];
// const dobro = nums.map(n => n * 2);
// console.log(dobro);
// console.log(nums); // [1, 2, 3, 4, 5] (o array original não é alterado).


//Dado const nomes = ["ana", "bruno", "carla"], use map para devolver todos os nomes em letras maiúsculas.

// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome => nome.toUpperCase());
// console.log(nomesMaiusculos); 

// const precos = [100, 200, 50];
// const aumento = precos.map(n => n + n * 0.1);
// console.log(aumento);

//Dado um array de alunos com nome e nota, use map para obter só os nomes.
// const alunos = [ 
//   { nome: "Ana", nota: 8 },
//   { nome: "Bruno", nota: 5 },
//   { nome: "Carla", nota: 9 },
// ];
// const nomes = alunos.map(aluno => aluno.nome);
//  console.log(nomes);
// const alunos = [
//   { nome: "Ana", nota: 8 },
//   { nome: "Bruno", nota: 5 },
//   { nome: "Carla", nota: 9 },
// ];
// // Com o mesmo array de alunos, use map para gerar textos no formato "Ana: 8".
// const nomes = alunos.map(aluno => `${aluno.nome}: ${aluno.nota}`); 
// console.log(nomes);

// Dado um array de produtos com nome e preco, devolva objetos com os mesmos campos e um novo campo precoFinal com 10% de desconto. O array original não pode mudar.

// const produtos = [
//   { nome: "Mouse", preco: 100 },
//   { nome: "Teclado", preco: 40 },
// ];

//  const produtosComDesconto = produtos.map(produto => ({
//    ...produto,
//    precoFinal: produto.preco * 0.9
//  }));

//  console.log(produtosComDesconto); 

//Numerar uma lista com index

//Dado const fila = ["Ana", "Bia", "Caio"], use map com o segundo parâmetro (index) para gerar "1. Ana", "2. Bia"...

// const fila = ["Ana", "Bia", "Caio"];
// const numerada = fila.map ((nome, index) => `${index + 1}. ${nome}`);
// console.log(numerada);

// Filter e map encadeados

// Dado um array de itens com nome, qtd e preco, devolva objetos { nome, subtotal } apenas dos itens com qtd maior que 0. O subtotal é qtd * preco.

// const itens = [
//   { nome: "Caneta", qtd: 3, preco: 2 },
//   { nome: "Lápis", qtd: 0, preco: 1 },
//   { nome: "Caderno", qtd: 2, preco: 15 },
// ];

// const itensComSubtotal = itens
// .filter(i => i.qtd > 0)
// .map(i => ({
//   nome: i.nome,
//   subtotal: i.qtd * i.preco
// }));  console.log(itensComSubtotal);  

//Dado const nums = [1, 2, 3, 4, 5, 6, 7, 8], use filter para ficar só com os números pares.
// const nums = [1,2 ,3,4,5,6,7,8];
// const pares = nums.filter(n => n % 2 === 0);
// console.log(pares); 

//Duas condições

//Dado um array de pessoas com nome, idade e ativo (true/false), devolva só as pessoas ativas e maiores de 18.

// const pessoas = [
//   { nome: "Ana", idade: 20, ativo: true },
//   { nome: "Bia", idade: 17, ativo: true },
//   { nome: "Caio", idade: 25, ativo: false },
//   { nome: "Duda", idade: 30, ativo: true },
// ];   

// const pessoasAtivasMaiores = pessoas.filter(p => p.ativo && p.idade > 18);
// console.log(pessoasAtivasMaiores.map(p => p.nome)); // ["Ana", "Duda"]
//Dado um array de títulos de filmes e o termo "ar", devolva os títulos que contêm o termo, sem diferenciar maiúsculas de minúsculas.
// const titulos = ["Star Wars", "Matrix", "Parasita", "Avatar"];
// const termo = "ar";
// const titulosFiltrados = titulos.filter(titulo => titulo.toLowerCase().includes(termo.toLowerCase()));
// console.log(titulosFiltrados);x

//1 1: Remover um item pelo id
// Dado um array de tarefas com id e texto, use filter para devolver a lista sem a tarefa de id 2.

// const tarefas = [
//   { id: 1, texto: "Estudar" },
//   { id: 2, texto: "Treinar" },
//   { id: 3, texto: "Dormir" },
// ];
// const tarefasFiltradas = tarefas.filter(tarefa => tarefa.id !== 2);
// console.log(tarefasFiltradas);

//Primeiro maior que 10
//Dado const nums = [4, 8, 12, 15, 3], use find para achar o primeiro número maior que 10.

// const nums = [4,8 ,12, 15,3];
// const primeiroMaiorQue10 = nums.find(n => n > 10);
// console.log(primeiroMaiorQue10);

//Dado um array de pessoas com nome e idade, ache a pessoa chamada "Bruno".
const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "Bruno", idade: 17 },
  { nome: "Carla", idade: 30 },
];
const bruno = pessoas.find(p => p.nome === "Bruno");
console.log(bruno); //