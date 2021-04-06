// TUPLA -> Array de tamanho fixo e com diferentes tipagens
const dadosCliente1: readonly [number, string] = [1, 'Vini'];
const dadosCliente2: [number, string, string] = [1, 'Vini', 'Oliveira'];
const dadosCliente3: [number, string, string?] = [1, 'Vini'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Vini', 'Oliveira'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'akz';
dadosCliente2[2] = 'oliveira';
// dadosCliente1.pop();

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// Readonly Array (somente leitura dos vetores)
const array1: readonly string[] = ['Vini', 'Oliveira'];
const array2: ReadonlyArray<string> = ['Vini', 'Oliveira'];

console.log(array1);
console.log(array2);
