const { Rack} = require('../src/rack');

describe('Rack testing, there...', () => {
    const rack = new Rack()
    test('should be a Rack...', () => {
        expect(rack).toBeDefined();
    });
    test('tokens are placed in the rack...', () => {
        expect(rack.place).toBeDefined();
    });
})