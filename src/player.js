const {Token} = require("./token");

class Player {

    color = ''
    columns = [1,2,3,4,5,6,7]

    constructor(color) {
        this.color = color
    }

    place() {
        return new Token(this.color, this.columns[0])
    }

}

module.exports = {Player}