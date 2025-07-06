let num = 41;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}
if (divisoes == 2) {
  console.log(num + " é um número primo");
} else {
  console.log(num + " não é um número primo");
}
