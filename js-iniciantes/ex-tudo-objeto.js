// nomeie 3 propriedades ou métodos de strings

// nomeie 5 propriedades ou métodos de elementos do DOM

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V


// Propriedades e métodos de strings
var str = "Olá, Mundo!";
console.log(str.length);          // Saída: 11
console.log(str.toUpperCase());   // Saída: "OLÁ, MUNDO!"
console.log(str.substring(0, 5)); // Saída: "Olá,"

// Propriedades e métodos de elementos do DOM
var elemento = document.querySelector('div');
elemento.innerHTML = "<p>Olá, Mundo!</p>";
elemento.addEventListener('click', function() {
  console.log('Elemento clicado!');
});
elemento.classList.add('ativo');
elemento.style.color = 'blue';
console.log(elemento.getAttribute('id'));

// Interação com o clipboard
navigator.clipboard.writeText('Texto a ser copiado').then(function() {
  console.log('Texto copiado para o clipboard');
}).catch(function(error) {
  console.error('Erro ao copiar texto: ', error);
});

navigator.clipboard.readText().then(function(text) {
  console.log('Texto lido do clipboard: ', text);
}).catch(function(error) {
  console.error('Erro ao ler texto: ', error);
});
