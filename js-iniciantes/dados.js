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
// Você pode somar uma string e assim concatenar as palavras

var nome = 'Pedro';
var sobrenome = 'Sálvia';
var nomeCompleto = nome + ' ' + sobrenome;


// Você pode somar números com strings, o resultado final é sempre uma string

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

// Aspas duplas, simples e templates string

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
'JavaScript é "super" fácil"';
"JavaScript é "super" fácil"; // Inválido