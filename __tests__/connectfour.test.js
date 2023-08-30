const { ConnectFour} = require('../src/connectfour.js');

describe('Connect four testing, there...', () => {
    test('should be a ConnectFour class...', () => {
      const game = new ConnectFour();
      expect(game).toBeDefined();
    });
    test('should be a ConnectFour class with players...', () => {
        const game = new ConnectFour();
        const players = game.players;
        expect(players).toBeDefined();
    });
  });