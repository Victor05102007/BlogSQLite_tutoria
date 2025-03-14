let prompt = require("prompt-sync");
prompt = prompt();

//1.1
//let preco = parseFloat(prompt("valor do produto:"));
//let desconto = parseFloat(prompt("digite o desconto:"));

//function calcularDesconto(preco, desconto){
//    const resultado = preco - (preco *
//   desconto / 100);
//    console.log("O valor com desconto é: ", resultado);
//}

//calcularDesconto(preco, desconto);

//1.2
//let temperaturaCelcius = parseFloat(prompt("valor em celsius:"));

//function converter(temperaturaCel){
//   const temperaturaFr = temperaturaCelcius * 1.8 + 32
//   console.log("o valor em  Fr é igual a:", temperaturaFr)
//}

//converter(temperaturaCelcius)

//1.3
//let preco = parseFloat(prompt("preço do produto:"));
//let meses = parseFloat(prompt("quantos meses:"));
//let taxa = parseFloat(prompt("qual o valor do juros:"));

//function juros(preco, meses, taxa){
//    return preco + (taxa * meses);
//}
//console.log("a taxa dos juros foi de:", juros(preco, meses, taxa))

//2.1

//let num1 = parseFloat(prompt("digite o primeiro numero:"));
//let num2 = parseFloat(prompt("digite o segundo numero:"));

//function comparar(num1, num2){
//    if (num1 === num2) {
//    console.log(" os valores são iguais")
//} else if (num1 > num2) {
//    console.log(" o primeiro numero é maior")
//} else if (num1 < num2) {
//    console.log(" o segundo é maior")
//}
//}

//comparar(num1, num2)

//2.2

//let idade = parseFloat(prompt("digite sua idade:"));

//function validade(idade){
//   if (idade < 12) {
//  console.log(" Criança")
//} else if (idade>=12 && idade <18) {
//    console.log(" adolescente")
//} else{
//    console.log(" adulto")
//}
//}

//validade(idade)

//2.3

//let nota = parseFloat(prompt("digite sua nota:"));

//function validade(nota){
//       if (nota >= 0 && nota <=10) {
//   return true
//} else {
//    return false
//}
//}

//console.log(validade(nota))

//3.1

// let nota = parseFloat(prompt("digite sua nota:"));
// let frequencia = parseFloat(prompt("digite sua porcentagem de falta:"));

//function validadeAprovacao(nota, frequencia){
//       if (nota >= 7 && frequencia < 25) {
//   return "aprovado"
//} else {
//    return "reprovado"
//}
//}

//console.log(validadeAprovacao(nota, frequencia))

//3.2

//let valor = parseFloat(prompt("digite um valor:"));
//let min = parseFloat(prompt("digite o valor minimo:"));
//let max = parseFloat(prompt("digite o valor maxima:"));

//function estaNoIntervalo(valor, min, max){
//      if (valor >= min && valor <= max) {
//   return true;
//} else {
//    return false;
//}
//}

//console.log(estaNoIntervalo(valor, min, max));

//3.3
//declarar o username e a senha que o usuario colocaria
let username = prompt("digite o username:");
let senha = prompt("digite a senha:");
//aqui a função para verificar se as informações estão corretas
function verificarLogin(username, senha) {
  if (username === "admin" && senha === "1234") {
    return "login bem-sucedido ";
  } else {
    return "usuario ou senha incorretos";
  }
}
//e o console.log para imprimir os valores
console.log(verificarLogin(username, senha));
