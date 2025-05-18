function sum (a, b) {
  return a + b;
}

function diff (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

function pow (a, b) {
    return Math.pow(a, b);
}

module.exports = {
    sum,
    diff,
    multiply,
    divide,
    pow,
};

