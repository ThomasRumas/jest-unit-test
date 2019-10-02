var myFunction = require('../jestTest'); 

test('Verify if we have Toto returning by myFunction with a mock', () => {
    const myValue = "Toto";
    const myFunction = jest.fn(() => myValue);

    myFunction(); 

    expect(myFunction).toHaveReturnedWith('Toto');
}); 

test('Verify is a value is null', () => {
    var myNull = null; 
    expect(myNull).toBeNull(); 
}); 

test('Verify boolean value at true', () => {
    var myBoolean = true; 
    expect(myBoolean).toBeTruthy(); 
}); 

test('Verify boolean value at false', () => {
    var myBoolean = false; 
    expect(myBoolean).not.toBeTruthy(); 
}); 

test('Array contains Tutu', () => {
    var myArray = ['toto','titi','tata','tutu']; 
    expect(myArray).toContain('tutu'); 
}); 

test('Addition to float numbers', () => {
    var addition = 3.5 + 4.2; 
    expect(addition).toBeCloseTo(7.7, 1); 
}); 

test('How many times myFunction is called on loop', () => {
    var myFunction = jest.fn();
    for(let i = 0; i < 4; i++) {
        myFunction(); 
    } 

    expect(myFunction).toHaveBeenCalledTimes(4); 
}); 