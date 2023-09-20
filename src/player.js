const {Token} = require("./token");

class Player {

    color = ''

    constructor(color) {
        this.color = color
    }

    place() {
        return  new Token(this.color)
    }

}

module.exports = {Player}