
// Boolean

// Existem dois valores booleanos: false ou true.

var possuiGraduacao = true;
var possuiDoutorado = false;

// Condicionais IF e ELSE 

// Verificar se uma expressão é verdadeira com if, caso contrário
// o else será ativido. 

var possuiGraduacao = true; 

if(possuiGraduacao) {
    console.log('Possui graduação');
} else {
    console.log('Não possui graduação');
}

// retorna Possui graduação e não executa o else. 

// O valor dentro dos parênteses sempre será avaliado em false ou true.

// Se o if não for verdadeiro, ele testa o else if

var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado){
    console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
    console.log('Possui graduação, mas não possui doutorado.');   
} else {
    console.log('Não possui graduação');
}

// retorna Possui graduação, mas não possui doutorado

// Switch

/* Com o switch você pode verificar se uma variável é igual à
diferentes valores utilizando o case. Caso ela seja igual, você pode fazer
alguma coisa e utilizar a palavra chave break; para cancelar a continuação.
O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/

var corFavorita = 'Vermelho';

switch (corFavorita) {
 case 'Vermelho':
    console.log('Olhe para o céu.');
    break;
 case 'Preto':
    console.log('Olhe para rosas.');
    break;
 case 'Amarelo':
    console.log('Olhe para o Sol.');
    break;
 default:
    console.log('Feche os olhos');      
}


// Truthy e Falsy

/* Existem valores que retornam true e outros que retornam
false quando verificados em uma expressão booleana.
*/

// Falsy

if(false)
    if(0) // ou -0
    if(NaN)
    if(null)
    if(undefined)
    if(''); // ou "" ou ``

// todo o resto é truthy    

// Truthy

if(true)
    if(1)
    if(' ')
    if('andre')
    if(-5)
    if({});
    

// Operador lógica de negação.

/* O operador !, nega uma posição booleana. Ou seja, 
 !true é igual a false.
*/

// Truthy

    if(!true) //false
    if(!1) // false
    if(!'') // true
    if(!underfined) //true
    if(!!' ') // true
    if(!!'') // false

// Dica: você pode compartilhar o !! para verificar se uma expressão é Truthy ou Falsy


// Operadores de comparação

// Vão sempre retornar um valor booleano

    10 > 5; // true
    5 > 10; // false
    20 < 10; // false
    10 <= 10 // true
    10 >= 11 // false 

// Mais operadores de comparação

/* O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja 
o tipo de dado deve ser o mesmo quando usamos.
*/
    10 == '10'; //true
    10 == 10; // true
    10 === '10'; // false 
    10 === 10 // true 
    10 != 15 // true
    10 !== '10' // true 