const { ConnectFour} = require('../src/connectfour.js');

describe('Connect four testing, there...', () => {
    const game = new ConnectFour();
    const players = game.players;
    test('should be a ConnectFour class...', () => {
      expect(game).toBeDefined();
    });
    test('should be a ConnectFour class with players...', () => {
        expect(players).toBeDefined();
    });
    test('should be two players...', () => {
        expect(players).toHaveLength(2);
    });
  });