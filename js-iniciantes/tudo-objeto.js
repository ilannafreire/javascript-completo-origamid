// Tudo é objeto

/* Strings, Números, Boolean, Objetos e mais, possuem
propriedades e métodos e por isso sáo objetos.
*/

var nome = 'Ilanna';

nome.length; //5
nome.charAt(1); // 'n'
nome.replace('ré', 'rei'); // 'Ilanna'
nome; // 'Ilanna'

// Uma string herda propriedades e métodos do construtor String()

// Números

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

// Funções

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//   return lado * lado;
//}"

areaQuadrado.length; // 1