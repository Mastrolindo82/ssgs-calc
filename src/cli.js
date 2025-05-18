const readline = require('readline');
const { sum, diff, multiply, divide, pow } = require('./math');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Benvenuto nella calcolatrice!");
console.log("Operazioni disponibili: somma, differenza, moltiplicazione, divisione, potenza");

rl.question("Scegli un'operazione: ", (operation) => {
  rl.question("Inserisci il primo numero: ", (num1) => {
    rl.question("Inserisci il secondo numero: ", (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      try {
        let result;
        switch (operation.toLowerCase()) {
          case 'somma':
            result = sum(a, b);
            break;
          case 'differenza':
            result = diff(a, b);
            break;
          case 'moltiplicazione':
            result = multiply(a, b);
            break;
          case 'divisione':
            result = divide(a, b);
            break;
          case 'potenza':
            result = pow(a, b);
            break;
          default:
            console.log("Operazione non valida.");
            rl.close();
            return;
        }
        console.log(`Il risultato è: ${result}`);
      } catch (error) {
        console.error(`Errore: ${error.message}`);
      }
      rl.close();
    });
  });
});
