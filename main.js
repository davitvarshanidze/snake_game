import { update as update_snake, draw as draw_snake, snake_speed } from "./snake.js"

let last_render_time = 0;

function main(current_time) {
    window.requestAnimationFrame(main)
    const seconds_since_last_render = (current_time - last_render_time) / 1000
    if (seconds_since_last_render < 1 / snake_speed) return
    last_render_time = current_time
}

window.requestAnimationFrame(main)

function update() {
    update_snake()
}

function draw() {
    draw_snake()
}