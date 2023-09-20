class Token {
    color =''
    column = -1
    row = -1


    constructor(color, column, row) {
        this.color = color
        this.column = column
        this.row = row
    }
}

module.exports = {Token}