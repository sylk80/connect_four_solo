const { Player} = require('../src/player');

describe('Player testing, there...', () => {
    const player = new Player('RED')
    test('should be a Player...', () => {
        expect(player).toBeDefined();
    });
    test('should be a Player...', () => {
        expect(player.place).toBeDefined();
    });

})