
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

function fromEuroToDollar(euro){
     return euro * 1.2;
}

function fromDollarToYen(dollar){
    return (dollar * 0.8) * 127.9;
}

function fromYenToPound (yen){
    return yen * 0.00625;
}

console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3));
console.log(fromYenToPound(170));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };