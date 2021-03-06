//import {Tile} from './Tile';

export class Playfield {

    constructor() {
        this.state = []
    }

    getState() {
        return this.state
    }
    
    setState(position, value) {
        this.state[position] = value
    }

    build(){
        for (let x = 0; x < 4; x++) {
            let row = this.state[x] = []

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
                callback(x, y, this.state[x][y])
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
        if (this.within(cell)){
            return this.state[cell.x][cell.y]
        } else {
            return null
        }
    }

    insertTile(tile){
        this.state[tile.x][tile.y] = tile;
    }

    removeTile(tile){
        this.state[tile.x][tile.y] = null
    }

    within(position) {
        return position.x >= 0 && position.x < 4 &&
               position.y >= 0 && position.y < 4
      }

}