//Arrays Arrays - lista de valores com índice

//const frutas = ["maçã", "Banana", "Melancia",]; // <<-- isso é uma arrays

//console.log(frutas [0]); 
//console.log(frutas [2]);
//console.log(frutas.length);

//frutas.push("Uva");
//console.log(frutas);

//projetos - conjunto de chave e valor
//const pessoa =[0
  //  {nome: "Lucas", idade: 35}
//]

//console.log (pessoa.nome);
//pessoa.cidade = "São Paulo"

//let i = 1;

//while (i <= 5) {
//   console.log("Número: " + i);
// i++ 

//}


/// senha de laço de repetição abaixo V
//let senha;

//do {
//  senha = prompt ("Digite sua senha:")
//} while (senha !== "batata");


//For virou uma tabuada do 7 no laço de repetição ele repete ate o 10* que foi a condição que ele cria V

//for (let i =1; i <= 10; i++) {
//  console.log(`7 x ${i} = ${7 * i}`)
//}

//contagem regresiva 

//for (let i=5; i >=1; i--) {
//  console.log(i)

//  console.log("Fogo!")
//}

//let soma = 0;

//for (let i = 1; i <= 5; i++) {

//  soma += i;
  
//}
//console.log(soma);

                                        //for...of FOR OF
// const frutas = ["maçã", "Banana", "Melancia",];

//  for (const fruta of frutas) {
//  console.log("Frutas:", fruta)
// }

//for...in

//const pessoa = { nome: "Lucas", idade: 25, cidade:"Baiah" };

//for (const chave in pessoa) {
//   console.log(`${chave}: ${pessoa[chave]}`)
//}


//Laço dentro de laço

//for (let linha =1; linha <=3; linha++) {
 // let texto ="";

//   for (let coluna= 1; coluna <= 4; coluna++) {
 //      texto += "*/";
 //  }
 //  console.log(texto)
//}

 for (let linha =1; linha <=4; linha++) {
   let texto ="";
 
   for (let coluna =1;  coluna <= linha; coluna++) {
      texto += "*";
   }
   console.log(texto)
  }