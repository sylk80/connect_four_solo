const { Rack} = require('../src/rack');
const {Token} = require("../src/token");

describe('Rack testing, there...', () => {
    const rack = new Rack()
    const tokenRed = new Token('RED')
    rack.place(tokenRed)
    const tokens = rack.tokens;
    test('should be a Rack...', () => {
        expect(rack).toBeDefined();
    });
    test('tokens are placed in the rack...', () => {
        expect(rack.place).toBeDefined();
    });
    test('token object is placed in the rack...', () => {
        expect(tokens).toBeDefined();
    });
    test('token object should be found in the rack...', () => {
        expect(tokens[0]).toBeDefined()
    });
    test('token object should be found in the rack in it\'s position...', () => {
        const firstPlaced = tokens[0]
        expect(firstPlaced.column).toEqual(tokenRed.column)
        expect(firstPlaced.row).toEqual(tokenRed.row)
    });
    test('token object should be found in the lowest position...', () => {
        const firstPlaced = tokens[0]
        expect(firstPlaced.row).toEqual(rack.rows[0])
    });
    test('should search for lowest position...', () => {
        expect(rack.lowestPosition).toBeDefined()
    });
})