
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBeCloseTo(4.2);
})

test("Three dollars should be 268.59 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(3)).toBeCloseTo(268.59);
})

test("1000 yen should be 6.25 pounds", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(500)).toBeCloseTo(3.125); //1
})