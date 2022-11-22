// const sum = (a,b) => {
//     return a + b;
// }


// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// // exporta la función para usarla en otros archivos 
// // (similar a la palabra clave `export` cuando se usa webpack)
// module.exports = { sum };


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
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