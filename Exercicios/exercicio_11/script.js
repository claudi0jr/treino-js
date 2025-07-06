let idade = 17;
let CNH = true;

if (idade >= 18 && CNH == true) {
  console.log("Você pode dirigir!");
} else if (idade >= 18 && CNH == false) {
  console.log("Você não pode dirigir, precisa de uma CNH!");
} else {
  console.log("Você não pode dirigir, é menor de idade!");
}
