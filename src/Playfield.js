import Tile from './Tile';

export default class Playfield {

    constructor() {
        this.#state = new Array(16)
    }

    setState(index, obj){
        this.#state[index] = obj
    }

    drawBoard() {
        const board = document.createElement("div")
        board.id = "playfield"
        const back = document.createElement("div")
        back.className = "back"

        for (i = 0; i < this.#state.length; i++){
            board.appendChild(back)
        }
        return board
    }

}