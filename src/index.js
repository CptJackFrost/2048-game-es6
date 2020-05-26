import { Controller } from './Controller.js'
import { HTMLManager } from './HTMLManager.js'
import { InputManager } from './InputManager.js'

document.addEventListener('DOMContentLoaded', function () {
    window.requestAnimationFrame(() => {
        new Controller(HTMLManager, InputManager)
    })
})