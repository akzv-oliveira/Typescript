// const objetoA: {
//   readonly chaveA: string;
//   chaveB: string;
//   chaveC?: string;
//   [key: string]: unknown;
// } = {
//   chaveA: 'Valor A',
//   chaveB: 'Valor B',
// };

// objetoA.chaveA = 'Outro valor'; // Não é possível alterar a chave por ser somente leitura
// objetoA.chaveD = 'Nova chave';
// objetoA.chaveC = 'Nova chave';

// console.log(objetoA);

// ou

const objetoA: {
    readonly chaveA: string;
    chaveB: string;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveB = 'Outro valor';

console.log(objetoA);
