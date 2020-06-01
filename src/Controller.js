import { Playfield } from "./Playfield.js"
import { Tile } from "./Tile.js"

export class Controller {

    constructor(HTMLManager, InputManager) {
        
        this.HTMLManager = new HTMLManager
        this.inputManager = new InputManager
        this.startTiles = 2
        this.over = false
        this.won = false

        this.inputManager.on("move", this.move.bind(this))
        this.inputManager.on("reset", this.setup.bind(this))

        this.setup()
    }

    setup(){
        this.playfield = new Playfield()
        this.playfield.build()
        this.addStartTiles()
        this.actuate()
    }

    addStartTiles(){
        for (let i = 0; i < this.startTiles; i++){
            this.addRandomTile()
        }
    }

    addRandomTile(){
        if (this.playfield.checkIfFreeCells()) {
            
            let tileValue
            if (Math.random() < 0.9){
                tileValue = 2
            } else {
                tileValue = 4
            }

            let tile = new Tile(tileValue, this.playfield.getRandomEmptyCell());
        
            this.playfield.insertTile(tile);
          }
    }

    actuate(){
        this.HTMLManager.actuate(this.playfield)
    }

    prepareTiles(){
        this.playfield.eachCell((x, y, tile) => {
            if (tile){
                tile.savePosition()
            }
        })
    }

    moveTile(tile, cell){
        this.playfield.removeTile(tile)
        this.playfield.insertTile(cell)
        tile.updatePosition(cell);
    }

    move(direction) {
        if (this.over || this.won){
            return
        }

        let cell, tile
        let moveVector = this.getMoveVector(direction)
        let traversals = this.buildTraversals(moveVector)
        let moved = false

        this.prepareTiles()

        traversals.x.forEach(x => {
            traversals.y.forEach(y => {
                cell = {x, y}
                tile = this.playfield.getCellContent(cell)

                if (tile){
                    let positions = this.findFarthestPosition(cell, moveVector)
                    let next = this.playfield.getCellContent(positions.next)

                    if (next && next.value === tile.value && !next.mergedFrom){
                        let merged = new Tile(tile.value * 2, positions.next)
                        merged.mergedFrom = [tile, next]

                        this.playfield.insertTile(merged);
                        this.playfield.removeTile(tile);

                        tile.updatePosition(positions.next);
                        
                        if (merged.value === 2048) {
                            this.won = true
                            alert("Вы победили!")
                        } else {
                            this.moveTile(tile, positions.farthest)
                        }

                        if (!this.positionIsEqual(cell, tile)){
                            moved = true
                        }
                    }
                }
            })
        })

        if (moved){
            this.addRandomTile()

            if(!this.movesAvalable){
                this.over = true
                alert("Игра окончена")
            }

            this.actuate()
        }
    }

    getMoveVector(direction){
        let map = {
            0: {x: 0,  y: -1}, // вверх
            1: {x: 1,  y: 0},  // вправо
            2: {x: 0,  y: 1},  // вниз
            3: {x: -1, y: 0}   //влево
        }

        return map[direction]
    }

    buildTraversals(moveVector){
        let traversals = {x: [], y: []}

        for (let i = 0; i < 4; i++){
            traversals.x.push(i)
            traversals.y.push(i)
        }

        if (moveVector.x === 1){
            traversals.x = traversals.x.reverse()
        }
        if (moveVector.y === 1){
            traversals.y = traversals.y.reverse()
        }

        return traversals
    }

    findFarthestPosition(cell, vector) {
        let previous

        do {
          previous = cell;
          cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
        } while (this.playfield.isCellFree(cell) && this.playfield.within(cell));
      
        return {
          farthest: previous,
          next: cell
        }
    }

    movesAvalable() {
        return this.playfield.checkIfFreeCells() || this.tileMatchesAvailable();
    }

    tileMatchesAvailable() {
        let tile

        for (let x = 0; x < 4; x++){
            for (let y = 0; y < 4; y++){
                tile = this.playfield.getCellContent({ x: x, y: y });

                if (tile) {
                    for (let i = 0; i < 4; i++){
                        let moveVector = this.getMoveVector(i)
                        let cell = {x: x + moveVector.x, y: y + moveVector.y}
                        let otherCell = this.playfield.getCellContent(cell)

                        if (other && otherCell.value === tile.value){
                            return true
                        }
                    }
                }
            }
        }

        return false

    }

    positionIsEqual(first, second){
        if (first.x === second.x && first.y === second.y){
            return true
        } else {
            return false
        }
    }
}