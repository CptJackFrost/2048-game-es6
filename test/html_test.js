import { HTMLManager } from "../src/HTMLManager.js"
import { Playfield } from "../src/Playfield.js"

document.addEventListener('DOMContentLoaded', () =>{
    let playfield = new Playfield()
    playfield.build()
    playfield.insertTile({x: 0, y: 0, value: 2})
    console.log(playfield.getState())    
    let manager = new HTMLManager()
    manager.actuate(playfield)

    document.querySelector('.reset-button').addEventListener('click', () => {manager.actuate(playfield)})    
    playfield.insertTile({x: 0, y: 1, value: 4, previousPosition: {x: 0, y: 3}})
})