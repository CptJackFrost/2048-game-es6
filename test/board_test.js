'use strict';
import {Playfield} from '../src/Playfield.js';

document.addEventListener('DOMContentLoaded', function () {
    let playfield = new Playfield();
    playfield.build();
    console.log(playfield.getState());
    console.log(playfield.findEmptyCells());
    console.log(playfield.getRandomEmptyCell());
    console.log(playfield.checkIfFreeCells());
    for (let x = 0; x < 4; x++){
        for (let y = 0; y < 4; y++){
            playfield.insertTile({x: x, y: y});
        }
    }
    console.log(playfield.checkIfFreeCells());
    playfield.removeTile({x: 0, y: 1});
    console.log(playfield.findEmptyCells());
    console.log(playfield.checkIfFreeCells());
});