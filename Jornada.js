function jornadaDoHeroi(posicaoInicial, totalPassos) {
    let posicaoAtual = posicaoInicial;

    for (let passo = 1; passo <= totalPassos; passo++) {
        // Simulação de um passo aleatório (pode ser ajustado conforme necessário)
        const movimento = Math.random() < 0.5 ? -1 : 1;
        
        // Atualiza a posição do herói
        posicaoAtual += movimento;

        console.log(`Passo ${passo}: Posição atual do herói = ${posicaoAtual}`);

        // Verifica se o herói chegou à caverna do dragão
        if (posicaoAtual === 0) {
            console.log("O herói chegou à caverna do dragão!");
            break;
        }
    }

    // Caso o herói não tenha chegado à caverna após todos os passos
    if (posicaoAtual !== 0) {
        console.log("O herói não conseguiu chegar à caverna do dragão.");
    }

    return posicaoAtual;
}

// Exemplo de uso
const posicaoInicial = 5;
const totalPassos = 10;
jornadaDoHeroi(posicaoInicial, totalPassos);
