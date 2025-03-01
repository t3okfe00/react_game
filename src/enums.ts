export enum KeyType {
  Enter = "Enter",
  SPACE = " ",
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  RIGHT = "ArrowRight",
  LEFT = "ArrowLeft",
}

export enum MovementAmount {
  moveUp = 5,
  moveDown = 5,
  moveRight = 5,
  moveLeft = 5,
}

export const movementMap = {
  [KeyType.RIGHT]: { axis: "posX", amount: MovementAmount.moveRight },
  [KeyType.LEFT]: { axis: "posX", amount: -MovementAmount.moveLeft },
  [KeyType.DOWN]: { axis: "posY", amount: MovementAmount.moveDown },
  [KeyType.UP]: { axis: "posY", amount: -MovementAmount.moveUp },
};
