const { Player} = require('../src/player.js');
class ConnectFour {
    players = []

    constructor() {
        this.players.push(new Player('YELLOW'))
        this.players.push(new Player('RED'))
    }
}


module.exports = {ConnectFour}