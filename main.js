import { update as update_snake, draw as draw_snake, snake_speed } from "./snake.js"
import { update as update_food, draw as draw_food } from "./food.js";

let last_render_time = 0;
const game_board = document.getElementById('game_board')

function main(current_time) {
    window.requestAnimationFrame(main)
    const seconds_since_last_render = (current_time - last_render_time) / 1000
    if (seconds_since_last_render < 1 / snake_speed) return
    last_render_time = current_time
    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    update_snake()
    update_food()
}

function draw() {
    game_board.innerHTML = ``
    draw_snake(game_board)
    draw_food(game_board)
}