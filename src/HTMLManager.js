export class HTMLManager {

    constructor () {
        this.board = document.getElementsByClassName('container')[0]
    }

    actuate(playfield){
        window.requestAnimationFrame(()=>{
            this.clearBoard(this.board)

            playfield.getState().forEach(column => {
                column.forEach(cell =>{
                    if (cell) {
                        this.addTile(cell)
                    }
                })
            })
        })


    }

    addTile(tile){
        
        let element = document.createElement("div")
        element.className = `thing t${tile.value}`
        let position = tile.previousPosition || { x: tile.x, y: tile.y }

        element.style.top = `${100 * position.y}px`
        element.style.left = `${100 * position.x}px`
        if (tile.previousPosition){
            //window.requestAnimationFrame(()=>{
                element.style.top = `${100 * tile.y}px`
                element.style.left = `${100 * tile.x}px`
            //})
        } else {
            element.className = `thing t${tile.value} new`
        }


        this.board.appendChild(element)
    }

    clearBoard(board){
        while (board.firstChild){
            board.removeChild(board.firstChild)
        }
    }
}