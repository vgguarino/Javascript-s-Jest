const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);
    
    expect(total).toBe(23);
});

test("One euro should be 0,99 dollars", function(){

    const { fromEuroToDollar } = require('./app.js')


    expect(fromEuroToDollar(3.5)).toBe(3.465);
})

test("one dollar should be 147.70 yenes", function(){

    const { fromDollarToYen } = require('./app.js')


    expect( fromDollarToYen(5)).toBe(738.5);
})

test("One yen should be 0.0060 pounds", function(){

    const { fromYenToPounds } = require('./app.js')


    expect(fromYenToPounds(1000)).toBe(6);
})