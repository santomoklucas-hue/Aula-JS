//const notas = [7, 8.5, 6];  // <---- só um Array
//const aluno = {nome: "Lucas", idade: 27, Nome: "renan", idade: 18} //  <---- Array de Objetos 

//const turma = [
//    {nome: "lucas", idade: 27},
//    {nome: "evelyn", idade: 23},

//];

//console.log(notas[1])
//console.log(aluno.nome)
//console.log(turma.[1])

// --------------------------------------------------------------------------------------------------
//const frutas = ["melancia", "banana", "morango"];

//console.log (frutas[0]);
//console.log (frutas.length);
//console.log (frutas[frutas.length -1]);
//console.log (frutas.at(-1));
//console.log (frutas[10]);

//frutas = "Morango";
//console.log(frutas);

// --------------------------------------------------------------------------------

//const fila = ["Ana", "Bia"];

//fila.push("Caio");
//fila.unshift("Zeca");
//console.log(fila);

//const atendido = fila.shift();
//const saiu = fila.pop();

//console.log(fila);
//console.log(atendido, saiu);

//------------------------------------------------------------------------------------------

//const letras = ["a", "b", "c", "d", "e"];
//letras.splice(1, 2);
//console.log (letras);

//letras.splice(1, 0, "x", "y");
//console.log(letras);

//letras.splice(0, 1, "z",);
//console.log(letras);   // --- 0 sgnifica a 1 linha (A) e o 1 em seguida seria a quantia que tira sendo a letra A e o Z o que vai substituir.

//-------------------------------------------------------------------------------------------------------------------------------------------------

// const nums = [1, 2, 3, 4, 5];

// console.log(nums.slice(1, 3));
// console.log(nums.slice(-2));
// console.log(nums.slice(-3));
// console.log(nums.slice(-1));   // puxar de tras pra frente quando se é negativo 

// console.log(nums.includes(6));  // ele puxa se é igual exemplo se não tiver 6 no const nums, ele vai dar falso, se tiver vai dar verdadeiro.
// console.log(nums.indexOf(4));
// console.log(nums.indexOf(99)); // se não tiver na const ele vai dar -1

// console.log (nums.join(" - "));
// console.log (nums);

// const a = [1, 2];
// const b = [3, 4];

// console.log(a.concat(b));  // ele vai juntar a const A e B juntas,
// console.log([...a, ...b]); //... os 3 pontos significa que você quer tudo da const tudo que se encontra dentro dela ou sela a mesma coisa que (concat).
// console.log([0, ...a, 99, ...b]);

// const

const aluno = {nome: "Evelyn", idade: 23};

aluno.idade = 24;
aluno.cidade = "são Paulo";
console.log(aluno);

delete aluno.cidade;
console.log(aluno);

