import {Tile} from './Tile.js';

document.addEventListener('DOMContentLoaded', () => {
    const field = document.querySelector('#playfield');
    const tile = new Tile(2, {x: 1, y: 1});
    const tile2 = new Tile(4, {x: 1, y: 2});


    field.appendChild(tile.drawTile());
    field.appendChild(tile2.drawTile());
})