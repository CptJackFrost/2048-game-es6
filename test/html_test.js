import { HTMLManager } from "../src/HTMLManager.js"
import { Playfield } from "../src/Playfield.js"

document.addEventListener('DOMContentLoaded', () =>{
    let playfield = new Playfield()
    playfield.build()
    playfield.insertTile({x: 0, y: 3, value: 2})
    console.log(playfield.getState())    
    let manager = new HTMLManager()
    manager.actuate(playfield)
    playfield.insertTile({x: 0, y: 1, value: 4, previousPosition: {x: 0, y: 3}})

    document.querySelector('.add').addEventListener('click', () =>{
        playfield.removeTile({x: 0, y: 0})
        playfield.insertTile({
            x: 3, y: 0, value: 128, previousPosition: {x: 3, y: 0}
        })
    })
    document.querySelector('.reset-button').addEventListener('click', () => {manager.actuate(playfield)})    
    
})