function inverterString(str) {
    let stringInvertida = '';
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    
    return stringInvertida;
}

// Exemplo de uso
const string = "Teste";
const stringInvertida = inverterString(string);
console.log(`String original: ${string}`);
console.log(`String invertida: ${stringInvertida}`);
