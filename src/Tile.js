export class Tile {

    #value
    #x
    #y
    #previousPposition = null

    constructor(value, position){
        this.#value = value
        this.#x = position.x
        this.#y = position.y
    }



    createTile() {
        const element = document.createElement("div")
        element.className = `thing t${this.#value}`
        element.style.top = `${100 * this.#y}px`
        element.style.left = `${100 * this.#x}px`
        return element
    }

    savePosition() {
        this.#previousPposition = {
            x: this.x,
            y: this.y
        }
    }

    updatePosition(position) {
        this.#x = position.x
        this.#y = position.y
    }
}