if (typeof prompt === "undefined") { 
    globalThis.prompt = require("prompt-sync") ();
}

//const nome = prompt("Qual é o seu nome?");

//const idade = Number(prompt("Qual é a sua idade?"));

//console.log (`Ola, ${nome}! Daqui a 10 anos voce tera ${idade+10} Anos`);