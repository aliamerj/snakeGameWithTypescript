import { getInputDirection } from "./utils/inputs.js";
export const snakeSpeed = 5;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments = 0;
export const updateSnake = () => {
    addSegments();
    const inputDirection = getInputDirection();
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = Object.assign({}, snakeBody[i]);
    }
    snakeBody[0].x += inputDirection.x;
    snakeBody[0].y += inputDirection.y;
};
export const drawSnake = (gameBoard) => {
    snakeBody.forEach((part) => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = part.y.toString();
        snakeElement.style.gridColumnStart = part.x.toString();
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });
};
export function expandSnake(amount) {
    newSegments += amount;
}
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((part, index) => {
        if (ignoreHead && index === 0)
            return false;
        return equalPositions(part, position);
    });
}
export function getSnakeHead() {
    return snakeBody[0];
}
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true });
}
function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push(Object.assign({}, snakeBody[snakeBody.length - 1]));
    }
    newSegments = 0;
}
