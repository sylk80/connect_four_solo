const { ConnectFour} = require('../src/connectfour.js');

describe('Connect four testing, there...', () => {
    const game = new ConnectFour();
    const players = game.players;
    const rack = game.rack;
    const columns = rack.columns
    const rows = rack.rows
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
    test('should be a rack...', () => {
        expect(rack).toBeDefined();
    });
    test('should be a rack with columns...', () => {
        expect(columns).toBeDefined();
    });
    test('should be a rack with 7 columns...', () => {
        expect(columns).toHaveLength(7);
    });
    test('should be a rack with 6 rows...', () => {
        expect(rows).toHaveLength(6);
    });
  });


describe('Game rules testing, there...', () => {
    const game = new ConnectFour()
    game.turn()
    const rounds = game.rounds
    const firstRound = rounds[0]
    test('should be rounds...', () => {
        expect(rounds).toBeDefined();
    });
    test('player should place in turns...', () => {
        expect(game.turn).toBeDefined();
    });
    test('rounds should be player turns of placing...', () => {
        expect(firstRound).toBeDefined();
    });
    test('one player should place in one turn...', () => {
        expect(firstRound.color).toEqual(game.players[0].color)
    });
})
