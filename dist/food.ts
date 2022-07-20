import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./utils/grid.js";

let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

export const updateFood = (): void => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
};
export const drawFood = (gameBoard: HTMLElement): void => {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y.toString();
  foodElement.style.gridColumnStart = food.x.toString();
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
};

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
