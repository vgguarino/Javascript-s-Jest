const sum = (a,b) => {
    return a + b
}

//console.log (sum (7,3))



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds };

let oneEuroIs = {
    "JPY": 145.62,
    "USD": 0.99,
    "GBP": 0.87,
}

let oneDollarIs = {
    "JPY": 147.70,
    "EUR": 1.01,
    "GBP": 0.88,
}

let oneYenIs = {
    "USD": 0.0068,
    "EUR": 0.0069,
    "GBP": 0.0060,
}

function fromDollarToYen(dolares){
       return oneDollarIs['JPY'] * dolares;
}

function fromEuroToDollar(euros){
    return oneEuroIs['USD'] * euros;
}

function fromYenToPounds(yenes){
    return oneYenIs['GBP'] * yenes;
}

console.log('💲💸Tipo de Cambio💱💰')

console.log('5 dolares💵 son', fromDollarToYen(5), ' yenes💴')
console.log('3.5 euros💶 son', fromEuroToDollar(3.5),  'dolares💵')
console.log('1000 yenes💴 son', fromYenToPounds(1000), 'libras💷')