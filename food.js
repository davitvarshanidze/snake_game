import { on_snake, expand_snake } from "./snake.js";

let food = { x: 10, y: 1 }
const expansion_rate = 1;

export function update() {
  if (on_snake(food)) {
    expand_snake(expansion_rate)
    food = { x: 20, y: 10 }
  }
}

export function draw(game_board) {
    const food_element = document.createElement('div')
    food_element.style.gridRowStart = food.y
    food_element.style.gridColumnStart = food.x
    food_element.classList.add('food')
    game_board.appendChild(food_element)
}