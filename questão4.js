
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o faturamento total
let faturamentoTotal = 0;
for (let estado in faturamento) {
    faturamentoTotal += faturamento[estado];
}

// Calcula o percentual de representação de cada estado
for (let estado in faturamento) {
    let percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
    
}
console.log( `Total = ${faturamentoTotal}`);
