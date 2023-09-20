class Player {

    color = ''

    constructor(color) {
        this.color = color
    }

    place() {
        return { color : this.color}
    }

}

module.exports = {Player}