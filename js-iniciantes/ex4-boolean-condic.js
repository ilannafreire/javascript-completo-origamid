// Compare o total de habitantes do Brasil com China (valor em milhões)

// Dados fornecidos

var brasil = 207;
var china = 1340;

// Diferença na população

var diferencaPopulacao = china - brasil;

// Mensagem de comparação 
if (brasil > china) {
    console.log("O Brasil tem mais habitantes que a China.");
}   else if(brasil < china) {
    console.log("A China tem mais habitantes que o Brasil.");
}   else {
    console.log("O Brasil e a China têm a mesma população.");
} 

// Exibindo a diferença populacional 
console.log("Diferença na população:", diferencaPopulacao,"milhões.");