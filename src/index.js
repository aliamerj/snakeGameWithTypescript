import { drawFood, updateFood } from "./food.js";
import { drawSnake, getSnakeHead, snakeIntersection, snakeSpeed, updateSnake, } from "./snake.js";
import { outsideGrid } from "./utils/grid.js";
let lastRanderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
const main = (currentTime) => {
    if (gameOver) {
        if (confirm("You lost. Press ok to restart.")) {
            window.location.reload();
        }
        return;
    }
    window.requestAnimationFrame(main);
    const sinceLastTime = (currentTime - lastRanderTime) / 1000;
    if (sinceLastTime < 1 / snakeSpeed)
        return;
    lastRanderTime = currentTime;
    update();
    draw();
};
window.requestAnimationFrame(main);
const update = () => {
    updateSnake();
    updateFood();
    checkDeath();
};
const draw = () => {
    if (gameBoard) {
        gameBoard.innerHTML = "";
        drawSnake(gameBoard);
        drawFood(gameBoard);
    }
    else {
        console.log("failed to draw");
    }
};
const checkDeath = () => {
    if (outsideGrid(getSnakeHead()) || snakeIntersection()) {
        gameOver = true;
    }
};
