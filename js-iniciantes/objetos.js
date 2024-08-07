// Objetos - conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
    nome: 'Ilanna',
    idade: 28,
    profissao: 'Desenvolvedora FullStack',
    possuiFaculdade: true,
}

pessoa.nome; //Ilanna
pessoa.possuiFaculdade; //true

/*
Propriedades e métodos consistem em nome (chave) e valor.*/

// Métodos 

// É uma propriedade que possui uma função no local do seu valor.

  var quadradro = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lado *lado;
    },
  }


  quadrado.lados; //4
  quadrado.area(5); //25
  quadrado.perimetro(5); //20

  // Abreviação de area: function() {} para area() {}

   var quadrado = {
    lados: 4,
    area(lado) {
      return lado * lado;
    },
    perimetro(lado) {
      return this.lados * lado;
    },
   }

   // Organização de código
/* Objetos servem para organizar o código em pequenas partes reutilizáveis.
*/   

 Math.PI; // 3.14
 Math.random(); // número aleatório

 var pi = Math.PI;
 console.log(pi); // 3.14

 /* Math - é um objeto nativo de JS. Console é um objeto. Log é um método.
 */

 // Como criar um objeto? 
 /* Um objeto é criado utilizando as chaves {} 
 */

 var carro = {};
 var pessoa = {};

 console.log(typeof carro); // 'object'

 // DOT NOTATION GET

 /* A forma de acessar propriedades de um objeto é utilizando o ponto .
 */

 var menu = {
  with: 800,
  height: 50,
  backgroundColor:'#84E',
 }

 var bg = menu.backgroundColor; // '#84E'

 // DOT NOTATION SET

 /*
 Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
 */

 var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84E',
 }

 menu.backgroundColor = '#000';
 console.log(menu.backgroundColor); // '#000'

 // Como adicionar propriedades e métodos

 /* Basta adicionar um novo nome e definir o valor.
  */

 var menu = {
  with: 800,
 }

 menu.height = 50;
 menu.position = 'fixed';

 // THIS - palavra-chave

 /*
 this vai fazer uma referência ao próprio objeto.
 */

 var height = 120;
 var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
 }


menu.metadeHeight(); // 25

// interessante lembrar que, sem o this, seria 60
// this retornará o próprio objeto