import {Controller} from './Controller.js'

document.addEventListener('DOMContentLoaded', function () {
    window.requestAnimationFrame(() => {
        let controller = new Controller()
        controller.setup()
        console.log(controller.playfield.getState())
        controller.HTMLManager.actuate(controller.playfield)
    })
})