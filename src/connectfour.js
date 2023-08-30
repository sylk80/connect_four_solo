const { Player} = require('../src/player.js');
class ConnectFour {
    players = []

    constructor() {
        this.players.push(new Player())
        this.players.push(new Player())
        this.players[0].color = 'YELLOW';
        this.players[1].color = 'RED';
    }
}


module.exports = {ConnectFour}