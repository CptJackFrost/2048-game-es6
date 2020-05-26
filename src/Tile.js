export class Tile {

    constructor(value, position){
        this.value = value
        this.x = position.x
        this.y = position.y

        this.previousPosition = null
        this.mergedFrom = null
    }

    savePosition() {
        this.previousPosition = {
            x: this.x,
            y: this.y
        }
    }

    updatePosition(position) {
        this.x = position.x
        this.y = position.y
    }

}