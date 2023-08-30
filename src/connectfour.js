const { Player} = require('../src/player.js');
const { Rack} = require('../src/rack.js');
class ConnectFour {
    players = []
    rack = ''

    constructor() {
        this.players.push(new Player('YELLOW'))
        this.players.push(new Player('RED'))
        this.rack = new Rack();
    }
}


module.exports = {ConnectFour}