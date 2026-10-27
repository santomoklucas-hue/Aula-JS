


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

function ccntarVogais(texto) {
    const vogais = "aeiou";
    let total = 0;

    for (const letra of texto.contarVogais()) {
            if (vogais.includes(letra)) {
                total++
            }
    } 
    return total;
}

console.log(contarVogais("Senai"));