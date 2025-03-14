// para usar o prompt no nodejs é preciso instalar essa lib 'primpt-sync'f7

let prompt = require("prompt-sync");
prompt = prompt();

const n1 = prompt("Digite o primeiro número: ");
console.log(n1);

const n2 = parseFloat(prompt("Numero dois:"));
console.log("A soma de n1+n2 é: ", n1 + n2);
