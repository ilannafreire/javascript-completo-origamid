
// Verifique se as seguintes variáveis são Truthy ou Falsy

// Variáveis fornecidos 

var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

// Verificando Truthy/Falsy

console.log("nome:", nome ? "Truthy" : "Falsy"); // Truthy: string não vazia
console.log("idade:", idade ? "Truthy" : "Falsy"); // Truthy: número diferente de 0
console.log("possuiDoutorado:", possuiDoutorado ? "Truthy" : "Falsy"); // Falsy: booleano false
console.log("empregoFuturo:", empregoFuturo ? "Truthy" : "Falsy"); // Falsy: variável indefinida
console.log("dinheiroNaConta", dinheiroNaConta ? "Truthy" : "Falsy"); // Falsy: número 0


