export const snake_speed = 2;
const snake_body = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]

export function update() {
    for (let i = snake_body.length - 2; i >= 0; i--) {
        snake_body[i + 1] = {  ...snake_body[i] }
    }
    
    snake_body[0].x += 1
    snake_body[0].y += -

}

export function draw(game_board) {
    snake_body.forEach(segment => {
        const snake_element = document.createElement('div')
        snake_element.style.gridRowStart = segment.x
        snake_element.style.gridColumnStart = segment.y
        snake_element.classList.add('snake')
        game_board.appendChild(snake_element)
    })
}