const { ConnectFour} = require('../src/connectfour.js');

describe('Connect four testing, there...', () => {
    test('should be a ConnectFour class...', () => {
      const game = new ConnectFour();
      expect(game).toBeDefined();
    });
  });