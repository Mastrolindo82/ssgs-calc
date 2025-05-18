# Calcolatrice Base in Node.js

Questo progetto è una semplice calcolatrice da riga di comando implementata in Node.js. Fornisce operazioni aritmetiche di base, tra cui addizione, sottrazione, moltiplicazione, divisione e potenza.

## Requisiti

- Node.js >= 18.x (LTS consigliata)

## Funzionalità

- Operazioni: somma, differenza, moltiplicazione, divisione, potenza.
- Gestione errori: divisione per zero.
- Interfaccia a riga di comando.
- Validazione degli input.
<!-- Elenca qui eventuali altre funzionalità extra implementate -->

## Installazione

1. Clona il repository:
   ```
   git clone https://github.com/Mastrolindo82/ssgs-calc.git
   ```
2. Vai nella directory del progetto:
   ```
   cd ssgs-calc
   ```
3. Installa le dipendenze:
   ```
   npm install
   ```

## Utilizzo

Per eseguire la calcolatrice:
```
npm start
```

Per eseguire i test unitari e ottenere la code coverage:
```
npm test
```
Il target di coverage richiesto è 100%. Il report viene generato nella cartella `coverage/`.

## Integrazione Continua

Il progetto utilizza GitHub Actions per eseguire automaticamente i test e la code coverage su ogni push e pull request.
