// Variáveis - responsáveis por guardar dados na memória.
// Inicia com a palavra var, let ou const.

var nome = 'Ilanna';
let idade = 28;
const possuiFaculdade = true;

// Evite repetições 
// DRY(Don't repeat yourself)

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

// Sintaxe 

// Palavra chave var seguida do nome, sinal de igual e o valor.

var nome = 'Julia';


// Vírgula

// Utilize vírgula para criar mais de uma variável, sem repetir a palavra chave var.

var nome = 'Casimiro';
    //idade = 25,
    //possuiFaculdade = true;

// SEM VALOR

// Pode declarar ela e não atribuir valor inicialmente

var precoAplicativo;
// retorna undefined


// Nome

// Podem iniciar com  $, _, ou letras
// Podem conter números mas não iniciar com eles

// Case sensitive
// nome é diferente de Nome

// Não utilizar palavras reservadas do js

// Camel case
// É comum nomearmos assim: abrirModal 

// Inválido 

//var  §nome;
//var  function;
//var 1possuiFaculdade;

// Válido 

var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;


// Declarar 
// Erro ao tentar utilizar uma variável que não foi declarada.

console.log(nome);
// retorna nome is not defined
    

// Hoisting
// São movidos para acima do código, porém o valor atribuído não é movido

console.log(nome);
var nome = 'Priscila';
// Retorna undefined

var profissao = 'Engenheira de Software';
console.log(profissao);
// Retorna Engenharia de Software 


// Mudar o valor atribuído 

/* É possível mudar os valores atribuídos a variáveis declaradas
com var e let. Mas não é possível modificar os valores das declaradas.
*/ 



var ano = 1970;
ano = 1996;

let preco = 50;
preco = 25;

const temFaculdade = true;
temFaculdade = false;

// retorna um erro

