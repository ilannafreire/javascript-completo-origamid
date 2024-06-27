// FUNÇÕES

/* Bloco de código que pode ser executado e reutilizado. 
Valores podem ser passados por uma função e a mesma retorna outro valor.
*/

function areaQuadrado(lado) {
    return lado * lado;
}
areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

// Chamada de function declaration
// Funções - parênteses () executam uma função.

// Parâmetros e argumentos

/* Ao criar uma função, você pode definir parâmetros
   Ao executar uma função, você pode passar argumentos.
*/

// peso e altura são parâmetros
 function imc(peso, altura) {
    const imc  = peso / (altura ** 2);
    return imc;
 }

 imc(80, 1.80) // 80 e 1.80 são os argumentos
 imc(60, 1.70) // 60 e 1.70 são argumentos

 /* Separar por uma vírgula cada parâmetro. Você pode redefinir mais de um
 parâmetro ou nenhum também.
 */