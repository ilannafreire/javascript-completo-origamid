
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