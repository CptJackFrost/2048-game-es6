import { InputManager } from '../src/InputManager.js';

document.addEventListener("DOMContentLoaded", () => {
    let tellDirection = function (key){
        let map = {
            0: "вверх",
            1: "вправо",
            2: "вниз",
            3: "влево"
        }

        console.log(map[key])
    }

    let tellIfReseted = function (){
        console.log("Сброшено")
    }

    let manager = new InputManager()
    manager.listen()
    manager.on("move", tellDirection)
    manager.on("reset", tellIfReseted)
})

