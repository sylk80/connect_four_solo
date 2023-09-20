const { Player} = require('../src/player.js');
const { Rack} = require('../src/rack.js');
class ConnectFour {
    players = []
    rack = ''
    rounds = []

    constructor() {
        this.players.push(new Player('YELLOW'))
        this.players.push(new Player('RED'))
        this.rack = new Rack();
    }

    turn() {
        this.rounds.push(this.players[0].place())
    }
}


module.exports = {ConnectFour}