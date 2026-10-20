const temperatura = 35;

if (temperatura >30) {
  console.log ("esta quente!")
}

  console.log ("fim do programa");

  const idade = Number (prompt("sua idade:"));

  if (Number.isNaN(idade) || idade < 0) {
     console.log("idade inválida!");

  } else {
    if (idade >= 18) {
        console.log("Maior de idade!!")
    } else {
        console.log("Menor de idade!!")
    }
  
    }