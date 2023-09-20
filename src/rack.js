class Rack {
    columns = new Array(7)
    rows = new Array(6)
    tokens = []

    place(token) {
        this.tokens.push(token)
    }
}

module.exports = {Rack}