const sum = require('../src/math').sum;
const diff = require('../src/math').diff;
const multiply = require('../src/math').multiply;
const divide = require('../src/math').divide;
const pow = require('../src/math').pow;


describe('Math functions', () => {

    test('sum', () => {
        expect(sum(2, 2)).toBe(4);
        expect(sum(-1, -1)).toBe(-2);
        expect(sum(0, 0)).toBe(0);
    });

    test.skip('sum errata', () => {
        const result = sum(3, 5);
        expect(result).toBe(7);
    });

    test('diff', () => {
        expect(diff(2, 1)).toBe(1);
        expect(diff(-1, -1)).toBe(0);
        expect(diff(0, 0)).toBe(0);
    });

    test('multiply', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-1, -1)).toBe(1);
        expect(multiply(0, 5)).toBe(0);
    });

    test('divide', () => {
        expect(divide(6, 3)).toBe(2);
        expect(divide(-6, -3)).toBe(2);
        expect(() => divide(1, 0)).toThrow('Cannot divide by zero');
    });

    test('pow', () => {
        expect(pow(2, 3)).toBe(8);
        expect(pow(-2, 3)).toBe(-8);
        expect(pow(0, 0)).toBe(1); // By convention
    });

});


// Questo è un file di test per il modulo math.js.
// Contiene test unitari per le funzioni definite in math.js.
// I test coprono le seguenti funzioni:
// - sum: Somma due numeri.
// - diff: Sottrae il secondo numero dal primo.
// - multiply: Moltiplica due numeri.
// - divide: Divide il primo numero per il secondo.
// - pow: Eleva il primo numero alla potenza del secondo.
// I test verificano vari casi, inclusi numeri positivi e negativi,
// zero e casi limite come la divisione per zero.
// I test utilizzano il framework di testing Jest.
// I test sono organizzati in un unico blocco describe per una migliore leggibilità.
// Ogni caso di test è definito utilizzando la funzione test, che prende una descrizione
// e una funzione di callback che contiene il test effettivo.