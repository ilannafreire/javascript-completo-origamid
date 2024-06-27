// Exercícios 

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

// Função para verificar idade em relação a um parente

function compararIdade(minhaIdade, idadeParente){
    if (minhaIdade > idadeParente){
        console.log("É maior");
    }   else if (minhaIdade === idadeParente){
        console.log("É igual");
    }   else {
        console.log("É menor");
    }
}

// Exemplo de uso da função 

var minhaIdade = 28;
var idadeParente = 65;

compararIdade(minhaIdade, idadeParente);
