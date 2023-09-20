class Token {
    color =''
    column = -1
    row = -1


    constructor(color, column) {
        this.color = color
        this.column = column
    }
}

module.exports = {Token}