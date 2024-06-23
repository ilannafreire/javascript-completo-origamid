// Qual o resultado da seguinte expressão?

var total = 10 + 5 * 2 / 2 + 20;
console.log(total); // Output : 35

// Crie duas expressões que retornem NaN

let expression1 = 10 / 0; // Division by zero 
let expression2 = "abc" + 123; // Adding a string and a number without conversion
console.log(expression1); // Output: NaN
console.log(expression2); // Output: NaN

// Somar a string '200' com o número 50 e retornar 250

let stringNumber = '200';
let parsedNumber = parsetInt(stringNumber);
let sum = parsedNumber + 50;
console.log(sum); // Output: 250

// Incremente o número 5 e retorne o seu valor incrementado
 
let number = 5;
let incrementNumber = ++number;
console.log(incrementNumber); // Output: 6

/* Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)
*/

var weightString = '80';
var weightUnit = 'kg';

// Convertendo a string de peso em numero usando o parseInt()

var weight = parsetInt(weightString);

// Divide o peso por 2 e estoca o resultado em weightDivideByTwo

var weightDivideByTwo = weight / 2;

// Imprime o resultado 
console.log("Peso dividido por 2:", weightDivideByTwo);
