class Rack {
    columns = [1,2,3,4,5,6,7]
    rows = [1,2,3,4,5,6]
    tokens = []

    place(token) {
        token.row = this.rows[0]
        this.tokens.push(token)

    }
}

module.exports = {Rack}