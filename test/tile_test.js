import {Tile} from '../src/Tile.js'

document.addEventListener('DOMContentLoaded', () => {
    const tile = new Tile(2, {x: 1, y: 1})
    const tile2 = new Tile(4, {x: 1, y: 2})

    console.log(tile.x)
    console.log(tile.value)
    console.log(tile2.y)
    console.log(tile2.value)
})