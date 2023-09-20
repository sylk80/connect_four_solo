const { Player} = require('../src/player');
const {Rack} = require("../src/rack");

describe('Player testing, there...', () => {
    const player = new Player('RED')
    const token = player.place();
    test('should be a Player...', () => {
        expect(player).toBeDefined();
    });
    test('player should place a token...', () => {
        expect(player.place).toBeDefined();
    });
    test('token should have same color...', () => {
        expect(token.color).toBeDefined();
    });

    test('token should have coordinates...', () => {
        expect(token.column).toBeDefined();
        expect(token.row).toBeDefined();
    });
})

describe('Player rules testing, ...', () => {
    const rack = new Rack();
    const playerRed = new Player('RED')
    const tokenRed = playerRed.place();
    test('player can place in existing column...', () => {
        expect(rack.columns.indexOf(tokenRed.column)).toBeGreaterThanOrEqual(0)
    });
    test('player can place in existing rows...', () => {
        expect(rack.rows.indexOf(tokenRed.row)).toBeGreaterThanOrEqual(0)
    });
    test('player can\'t place in an occupied row...', () => {
        rack.place(tokenRed)
        const playerYellow = new Player('YELLOW')
        const tokenYellow = playerYellow.place();
        expect(tokenYellow.row).not.toEqual(tokenRed.row)
    });
})