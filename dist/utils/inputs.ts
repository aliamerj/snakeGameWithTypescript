import { ObjectBody } from "./Types";

let inputDirection: ObjectBody = { x: 0, y: 0 };
let lastInputDirection: ObjectBody = { x: 0, y: 0 };

window.addEventListener("keydown", (e: KeyboardEvent) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export const getInputDirection = (): ObjectBody => {
  lastInputDirection = inputDirection;
  return inputDirection;
};
