import Tile from './Tile';

export default class Playfield {

    constructor() {
        this.#state = new Array(16)
    }

    build(){
        for (let x = 0; x < 4; x++) {
            let row = this.#state.x = []

            for (let y = 0; y < 4; y++){
                row.push(null)
            }
        }
    }

    getRandomEmptyCell(){
        let cells = this.findEmptyCells()

        if (cells.length){
            return cells[Math.floor(Math.random() * cells.length)]
        }
    }

    findEmptyCells() {
        let cells = []

        this.eachCell(function (x, y, tile){
            if (!tile) {
                cells.push({x: x, y: y})
            }
        })

        return cells        
    }

    eachCell(callback) {
        for (let x = 0; x < 4; x++){
            for (let y = 0; y < 4; y++){
                callback(x, y, this.cells[x][y])
            }
        }
    }

    checkIfFreeCells() {
        return !!this.findEmptyCells().length
    }

    isCellFree(cell) {
        return !this.IsCellOccupied(cell)
    }

    IsCellOccupied(cell) {
        return !!this.getCellContent(cell)
    }

    getCellContent(cell) {
        return this.cells[cell.x][cell.y]
    }

    insertTile(tile){
        this.cells[tile.x][tile.y] = tile;
    }

    removeTile(tile){
        this.cells[tile.x][tile.y] = null
    }




    /*drawBoard() {
        const board = document.createElement("div")
        board.id = "playfield"
        const back = document.createElement("div")
        back.className = "back"

        for (i = 0; i < this.#state.length; i++){
            board.appendChild(back)
        }
        return board
    }*/

}