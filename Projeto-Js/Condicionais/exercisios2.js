//const semaforo = prompt("Qual a cor do semaforo? (verde) (amarelo) (vermelho)");

//if (semaforo === "verde") {
//       alert("Siga em Frente");
//} else if (semaforo === "amarelo")
//      alert("venha devagar e pare!"); {
//} else if (semaforo ==="Vermelho")
//    alert("fique parado!"); {
//} else {
//    alert("Cor Invalida!")
//}

//const nota = Number(prompt("Qual a sua nota? de 0 a 100"));

//if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//    console.log ("Nota Inválida.");
//} else if (nota <60) {
//    console.log("Reprovado");
//} else if (nota <80) {
//    console.log("Recuperação!")
//} else {
//    console.log("Aprovado!");
//}


//const user = prompt("Usuario")
//const pass = prompt("Senha")

//const perfilOK = (user === "admin123" || user === "gerente");
//const senhaOK = (pass === "1234");

//if(perfilOK && senhaOK) {
//    alert("Acesso Liberado");
//}else {
//    alert("Acesso Negado");
//}

      //Classificador de Número
      //Peça um número e diga se é positivo, negativo ou zero.
      //**Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`


    //  const numero = Number(prompt("Digite um numero Negativo ou Possitivo!"));

    //  if (Number.isNaN(numero)) {
     //   alert("Valor Invalido");
     // }else if(numero > 0) {
     //   alert("Positivo");
     // }else if(numero < 0) {
      //  alert("Numero Negativo")
     // } else {
       // alert("Numero é Zero")
      //}


    //  Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.

//**Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`

//meu codigo abaixo

//const idade = Number(prompt("Qual sua idade?"));

//if (Number.isNaN(idade)) {
//    alert("valor invalido");
//} else if(idade < 18 ) {
// alert("você não tem idade para dirigir criança!")
//} else if(idade > 18) {
//    alert("ja ta mais que na idade pra tirar carta!")
//} else {
//    alert("chegou aos 18 parabens! pode tirar carta")
//}

// codigo do professor abaixo

//const idade = Number(prompt("Qual sua idade?"))

//if (Number.isNaN)

//Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.

//**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`


//const numero = Number(prompt("Digite um numero par ou impar!"));

//if (Number.isNaN(numero)) {
//    alert("valor invalido");
//}
//else if(numero % 2 === 0) {
//    alert("Par");
//}else{
//    alert("0 Número é impar")
//}

       //Peça peso e altura, calcule o IMC e classifique: 
//<18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, >=30 obesidade. Valide entradas inválidas.

//**Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`


//const peso = Number(prompt("Digite seu peso(kg)"))
//const altura =Number(prompt("Altura (M)"));

//if(Number.isNaN(peso) || Number.isNaN(altura) || peso <=0 || altura <=0) {
//  alert("valores de peso ou altura inválidos!");
//} else {
//    const imc = peso / (altura ** 2)

//alert(`Seu IMC é : ${imc.toFixed(2)}`)

//if (imc < 18.5) {
//    alert("Você esta abaixo do peso amigão!");
//} else if (imc < 25) {
//    alert("Você esta com Peso Normales");
//} else if (imc < 30) {
//    alert("Você esta com Sobrepeso")
//} else {
//    alert("você esta no nivel supremo (Obesidade)")
//}
//}


 //exemplo de calculo de peso aki 
 //const peso = Number(prompt("Digite seu peso(kg)"));

 //const altura = Number(prompt("Altura (m):"));

//const imc = peso / (altura ** 2);

//alert(`IMC: ${imc.toFixed(2)}`);

//Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

//**Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`

//const valor = Number(prompt("qual valor da compra?"));

//if (Number.isNaN(valor) || valor < 0) {
// alert("Valor Invalido!")
//} else if (valor > 100) {
//   const desconto = valor * 0.1;
//   alert("Valor final com desconto " + (valor - desconto));
//} else {
//    alert("Valor final: R$" + valor)
    
//}


//Peça 3 números e diga qual é o maior.

//**Exemplo:** `4`, `9` e `7` → `O maior número é: 9`

//const a = Number(prompt("Digite o Primeiro"));
//const b = Number(prompt("Digite o Segundo"));
//const c = Number(prompt("Digite o Terçeiro"));

//if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
//  alert("Numeros Inválidos.")
//} else {
//  let maior = a
//  if(b > maior) maior = b;
//  if(c > maior) maior = c;
//  alert("O maior número é : " + maior);
//}

//Peça dois números e uma operação (+, -, *, /). Use switch para calcular, com default para operações inválidas e checagem de divisão por zero.

const calculo = Number(prompt("Digite o Primeiro valor!."));
const calculo2 = Number(prompt("Digite o Segundo Numero!."));
const op = prompt("Digite a operação (+, -, *, /)");
let resultado;
if (Number.isNaN(calculo) || Number.isNaN(calculo2)) {
  alert("Valores inválidos!");
} else {
 
  switch (op) {
    case "+":
       resultado = calculo + calculo2;
       alert(`Resultado ${resultado}`);
       break;
       case "-":
       resultado = calculo + calculo2;
       alert(`Resultado ${resultado}`);
       break;
       case "*":
       resultado = calculo + calculo2;
       alert(`Resultado ${resultado}`);
       break;  
       case "/":
       if (calculo2 === 0)    {
       alert(`Resultado ${resultado}`);
       } else {
       resultado = calculo / calculo2;
       alert(`Resultado ${resultado}`);

       }
       break;
        
        default:
          alert("Operação inválida");
}
}