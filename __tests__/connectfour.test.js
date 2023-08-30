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
    test('should be red player...', () => {
        const red = players[1].color
        expect(red).toEqual('RED');
    });
    test('should be yellow player...', () => {
        const yellow = players[0].color
        expect(yellow).toEqual('YELLOW');
    });
  });