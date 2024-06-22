// 7 Tipos de dados
// Todos são primitivos(imutáveis) exceto os objetos(mutáveis ou imutáveis).

var nome = 'Ilanna'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comidade = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object 

// Primitivos são dados imutáveis. 

// Verificar tipo de dado

var nome = 'Julia';
console.log(typeof nome);
// retorna string 

// ...
console.log(typeof null); // Retorna "object" (por motivos históricos do JavaScript)



// String 

var nome = 'Pedro';
var sobrenome = 'Sálvia';
var nomeCompleto = nome + ' ' + sobrenome;