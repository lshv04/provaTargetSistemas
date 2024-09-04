function pertenceAFibonacci(numero) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let numeroAnterior = 0;
    let numeroAtual = 1;
  
    // Se o número informado for 0 ou 1, ele pertence à sequência
    if (numero === 0 || numero === 1) {
      return true;
    }
  
    // Loop para gerar os números da sequência de Fibonacci
    for (let proximoNumero; numeroAtual <= numero;) {
      if (numeroAtual === numero) {
        return true; // Se o número informado for igual ao número atual da sequência, ele pertence à sequência
      }
  
      // Calcula o próximo número na sequência
      proximoNumero = numeroAnterior + numeroAtual;
  
      // Atualiza os valores para o próximo ciclo
      numeroAnterior = numeroAtual;
      numeroAtual = proximoNumero;
    }
  
    // Se o loop terminar sem encontrar o número, ele não pertence à sequência
    return false;
  }
  
  // Atualize valor para verificar:
  const numeroUsuario = 34; // Substitua pelo número que deseja verificar
  
  if (pertenceAFibonacci(numeroUsuario)) {
    console.log(`${numeroUsuario} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numeroUsuario} não pertence à sequência de Fibonacci.`);
  }
  