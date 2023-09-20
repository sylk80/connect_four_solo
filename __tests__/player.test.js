const { Player} = require('../src/player');

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