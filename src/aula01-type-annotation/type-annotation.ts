/* eslint-disable */

// Tipos básicos (inferência de tipos - redundância)
let nome: string = 'Vini'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
let big: bigint; // bigint
// -----------------------------------------------------------------

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];
// -----------------------------------------------

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: 'Vini'
};
// "?" torna o parâmatro opcional
// ---------------------------------------------------------------

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
// Alias Type
// ---------------------------------------------------------------

