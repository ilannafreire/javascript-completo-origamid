
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