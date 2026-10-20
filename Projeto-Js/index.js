// só as (//) --> e pra por comentario de uma linha só 
//linguagem interpretada
//NodeJS
//Tipagem fraca
/*
let minhavariavel =10;
console.log(minhavariavel);

minhavariavel= "Olá, mundo"
console.log(minhavariavel);

minhavariavel=true
console.log(minhavariavel);

let numero = 10;
let texto = "20";
let resultado = numero + texto;

console.log(resultado);

//Variável

// let palavra que vai criar a variável
// const palavra que vai criar a variável
// var palavra que vai criar a variável
let idade = 35; 
// idade nome (etiqueta) 
//= (Atribuição)
// 35 valor



let nome = "Lucas"
let idade1 = 35;

console.log (nome);
console.log (idade1);
console.log (idade1 + 1);
console.log ("Olá, " + nome + "mal vindo!");

idade1 = 30;

const idade2 = 35;
idade2 = 30;
*/


//case Sensitive - sensivel ao MAIUSCULO e ao minusculo. EX . Nome - NOME- e nome.

/*
let nome = "Lucas"
let Nome = "Maria"
let NOME = "João"
console.log(nome)
console.log(Nome)
console.log(NOME)
*/

//Palavras, Reservadas
//let, const, var, if, else, for, while, function, return, class, new, switch, case
//let if - "teste";

//Regras de Nomenclatura
//Pode começar com letra, _ ou $ --> nome disso é cifrão
//Pode conter: letras, números, _ ou $
//Varial não tem nome com espaço pode por ex nomeCompleto - digiteAqui-

/*
let idade = 20;
idade = 21;
console.log=(idade);

const PI = 3.14159;

const total=150;

if (total > 100) { 
   var desconto = 10;
   let frete = 0;
}

console.log(frete);
*/

//Tipos Primitivos
 //const preco = 19.9;
//console.log(typeof preco);

//const nome = "Lucas";
//console.log (typeof nome);

//const ativo = true;
//console.log(typeof ativo);

//const vazio = null;
//console.log(typeof vazio);

//let indefinido;
//console.log(typeof indefinido);

//Strings e Template Literals 

//const nome1 = "Lucas";
//const nome2 = "Maria";
//const nome3 = "João";
//const idade = "27";

//const nomeCompleto = "Lucas Cristóvão de Lima";

//console.log (nomeCompleto.length);
//.Length é para comprimento ele mede!

//console.log(nomeCompleto);
//console.log(nomeCompleto.toUpperCase());
//console.log(nomeCompleto.toLowerCase());

// para ativar uma função termina-la com () "Parenteses".

//console.log(`Olá, meu nome é ${nomeCompleto} e tenho ${idade} anos.`)


//Conversões de Tipo
//console.log(Number(`123`));
//console.log(parseInt(`10.9`));
//console.log(parseFloat(`10.9`));
//console.log(String(123));

//console.log(Boolean(0));
// 0 é falso 1 é verdadeiro!
//console.log(Boolean(1));
//console.log(Boolean(``));

//const texto1 = prompt("Digite um Número");
//const texto = Number(prompt("Digite um número"));
//console.log(texto + 5);

//Arredontando e formatando números

//const preco = 19.987;

//console.log (preco.toFixed(2));
//console.log (Math.round(preco));
//console.log (Math.floor(preco));
//console.log (Math.ceil(preco));

//Operadores Atitméticos

//console.log(2 + 3);
//console.log(5 - 2);
//console.log(4 * 2);
//console.log(10 / 2);
//console.log(10 % 3);
//console.log(2 ** 3);

//Operadores de Comparação,
//console.log (5 =="5"); // igual frouxo
//console.log (5 == 5); // igual frouxo

//console.log (5 === "5"); // igual estrito
//console.log (5 === 5); // igual estrito

//console.log (5 != "5");  // diferente frouxo
//console.log (5 != 7);  // diferente frouxo

//console.log (5 !== "5");  // diferente estrito
//console.log (5 !== 7);  // diferente estrito

//Média de duas notas.
//console.log ();
//const n1 = Number ("Primeira nota");
//const n2 = Number("Segunda nota");

//const media = (n1 + n2) / 2;

//console.log (`Média: ${media.toFixed(1)}`);

//IMC (Índice de massa Corportal)

//const peso = Number(prompt("Digite seu peso(kg)"));
//const altura = Number(prompt("Altura (m):"));

//const imc = peso / (altura ** 2);

//alert(`IMC: ${imc.toFixed(2)}`);