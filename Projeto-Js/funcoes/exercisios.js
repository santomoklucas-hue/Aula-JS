


//Crie a função ´areaRetangulo(base, altura)`que devolve a área.
//Exemplo:AreaRetangulo(5,3) devolve 15

//function AreaRetangulo(base, altura) {
//    return base * altura 
//} 

//console.log(AreaRetangulo (5, 3));

/*
Crie MaiorDeTres(a,b,c) que devolve o maior dos tres números, sem usar Main max.

Exemplo:: MaiorDeTres(3, 9, 5) Devolve 9.
*/


//function MaiorDeTres (a, b, c) {
//// let maior = a;
// if (b > maior) maior = b;
// if (c >maior) maior = c;
// return maior;
//}

//console.log(MaiorDeTres(3, 9, 6));

//Math.max();
//console.log(Math.max(3, 9,5));

/* 
Crie CelsiusParaFahrenheit (c). Fórmula: c * 9 / 5 + 32. se c não for um numero valido, devolva Null.

Exemplo: Celsiusparafahreheit(100) devolve 112; celsiusparafareheit("abc") devolve null.
*/

//function celsiusParaFahrenheit (c) {
//   if (typeof c !== "number" || Number.isNaN(c)) {
//    return null;
//   }
//   return c * 9 / 5 + 32;
//}

//console.log(celsiusParaFahrenheit(100));

/* Crie contarvogais(texto) que devolve quantas vogais (a, e, i , o, u) o texto tem, sem difetenciar de maiúscula de minúsculas.

**exemplo:** contarvogais("javascript") devolve 3 
*/

// function ccntarVogais(texto) {
 //   const vogais = "aeiou";
//    let total = 0;

//    for (const letra of texto.contarVogais()) {
//            if (vogais.includes(letra)) {
//               total++
//            }
//    } 
//    return total;
//}

//console.log(contarVogais("Senai"));

//Crie `inverter(texto)` que devolve o texto de trás para frente. Depois crie `ehPalindromo(texto)` que **usa** `inverter` e devolve `true` ou `false`, ignorando maiúsculas.

//**Exemplo:** ehPalindromo("Arara")` devolve `true`; `ehPalindromo("Casa")` devolve `false`


//function inverter(texto) {
//    let textoInvertido  = "";
//    for (let i = texto.length - 1; i >= 0; i--) {
//        textoInvertido += texto[i];
//    }
//    return textoInvertido;
//}

//function ehPalindromo(texto) {
//    const normal = texto.toLowerCase();
//    return normal === inverter(normal)
//}

//console.log(ehPalindromo("Arara"));
//console.log(ehPalindromo("Casa"));

/* Crie `depositar(saldo, valor)` e `sacar(saldo, valor)`, cada uma **devolvendo o novo saldo**. O saque deve ser recusado (mostrando uma mensagem e mantendo o saldo) se o valor for inválido ou maior que o saldo. Depois, desafie-se a encaixá-las no menu com `do...while` da aula de repetição.

**Exemplo:** saldo `100` → depositar `50` → sacar `30` → sacar `500` → saldo final `120`
 */

// function depositar (saldo, valor) {
//    if (valor <= 0) {
//         console.log("Valor de depósito inválido.");
//    return saldo
//    }

//    return saldo + valor;
//}

//function sacar (saldo, valor) {
//    if (valor <= 0 || valor > saldo) {
//        console.log("saldo invalido")
//        return saldo
//    } 
//    return saldo - valor;
//}

//let saldo = 100;
//saldo = depositar(saldo, 50);
//saldo = sacar(saldo, 30);
//saldo = sacar(saldo, 500);
//console.log("Saldo Final:", saldo);

//Crie um objeto `operacoes` em que cada chave é um símbolo (`"+"`, `"-"`, `"*"`, `"/"`) e cada valor é uma arrow function. Depois crie `calcular(a, op, b)` que escolhe a função certa. Devolva `null` para operação desconhecida ou divisão por zero.

//**Exemplo:** `calcular(10, "+", 5)` devolve `15`; `calcular(10, "/", 0)` devolve `null`


const operacoes = {
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => (b === 0 ? null :a / b),
};

function calcular(a, op, b) {
    const funcao = operacoes [op];
    if (!funcao) {
        return null
    }

    return funcao(a, b)

}

console.log(calcular(10, "+", 5));
console.log(calcular(10, "/", 0));