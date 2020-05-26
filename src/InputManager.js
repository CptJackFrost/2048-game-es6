export class InputManager {

    constructor(){
        this.events = {}
    }
  
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = []
        }
        this.events[event].push(callback)
    }
  
    emit(event, data) {
        let callbacks = this.events[event]
        if (callbacks) {
            callbacks.forEach(function (callback) {
                callback(data)
            })
        }
    }
  
    listen() {
        let self = this
    
        let map = {
            38: 0, // вверх
            39: 1, // вправо
            40: 2, // вниз
            37: 3, // влево
        } 

        let gestures = [Hammer.DIRECTION_UP, Hammer.DIRECTION_RIGHT,
                        Hammer.DIRECTION_DOWN, Hammer.DIRECTION_LEFT]
    
        let gameContainer = document.getElementById("playfield")
        let handler       = Hammer(gameContainer, {
            drag_block_horizontal: true,
            drag_block_vertical: true
        })
        
        handler.on("swipe", function (event) {
            event.gesture.preventDefault()
            let mapped = gestures.indexOf(event.gesture.direction)
    
        if (mapped !== -1) self.emit("event", mapped)
        })

        let reset = document.getElementsByClassName("reset-button")[0]
        reset.addEventListener("click", this.reset.bind(this))
    }
  
    reset (event) {
        event.preventDefault()
        this.emit("reset")
    }
}
