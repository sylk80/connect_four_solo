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
        return null
    }
}


module.exports = {ConnectFour}