const { Rack} = require('../src/rack');
const {Token} = require("../src/token");

describe('Rack testing, there...', () => {
    const rack = new Rack()
    const tokenRed = new Token('RED')
    rack.place(tokenRed)
    test('should be a Rack...', () => {
        expect(rack).toBeDefined();
    });
    test('tokens are placed in the rack...', () => {
        expect(rack.place).toBeDefined();
    });
    test('token object is placed in the rack...', () => {
        expect(rack.tokens).toBeDefined();
    });
    test('token object should be found in the rack...', () => {
        const tokens = rack.tokens;
        expect(tokens[0]).toBeDefined()
    });
})