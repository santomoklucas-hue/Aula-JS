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


const user = prompt("Usuario")
const pass = prompt("Senha")

const perfilOK = (user === "admin123" || user === "gerente");
const senhaOK = (pass === "1234");

if(perfilOK && senhaOK) {
    alert("Acesso Liberado");
}else {
    alert("Acesso Negado");
}