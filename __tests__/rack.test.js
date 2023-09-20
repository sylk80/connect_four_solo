const { Rack} = require('../src/rack');
const {Token} = require("../src/token");

describe('Rack testing, there...', () => {
    const rack = new Rack()
    const tokenRed = new Token('RED')
    test('should be a Rack...', () => {
        expect(rack).toBeDefined();
    });
    test('tokens are placed in the rack...', () => {
        expect(rack.place).toBeDefined();
    });
    test('token object is placed in the rack...', () => {
        rack.place(tokenRed)
        expect(rack.tokens).toBeDefined();
    });
})