// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo

/* Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
*/  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  
// 1- criaçao do objeto com dados pessoais 
 var dadosPessoais = {
    nome: 'Ilanna',
    sobrenome: 'Freire',
    // Método para mostrar o nome completo
    nomeCompleto: function() {
        return this.nome + ' ' + this.sobrenome;
    }
};

// Mudando valor da propriedade preço
 
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
};

carro.preço = 3000;

// 4. Criaçao do projeto de um cachorro

var cachorro = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir: function(pessoa) {
        if (pessoa === 'homem') {
            return 'Au au!';
        } else {
           return '...';
        }
    }
};
