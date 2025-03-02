import { useState, useEffect } from "react";
import { MovementAmount } from "./enums";
import { movementMap } from "./enums";
import Player from "./components/Player";
import Mouse from "./components/Mouse";
import { displacement, Position, PositionKey } from "./types";

function App() {
  const [position, setPosition] = useState<Position>({
    posX: 25,
    posY: 25,
  });
  const [mousePosition, setMousePosition] = useState<Position>({
    posX: 100,
    posY: 100,
  });
  const [mouseTrigger, setMouseTrigger] = useState<boolean>(false);

  const mouse_width = 50;
  const mouse_height = 50;

  useEffect(() => {
    window.addEventListener("keydown", moveOnKeyPress);
    window.addEventListener("click", mouseClickOnScreen);
    return () => {
      window.removeEventListener("keydown", moveOnKeyPress);
      window.removeEventListener("click", mouseClickOnScreen);
    };
  });

  function mouseClickOnScreen(e) {
    console.log("pos ->", mousePosition);

    setMousePosition({ posX: e.clientX, posY: e.clientY });
    setMouseTrigger(!mouseTrigger);
  }

  const updatePosition = (axis: PositionKey, amount: MovementAmount) => {
    setPosition((prev) => ({
      ...prev,
      [axis]: prev[axis] + amount,
    }));
  };

  function moveOnKeyPress(e: KeyboardEvent) {
    const movement: displacement = movementMap[e.key];

    if (movement) {
      updatePosition(movement.axis, movement.amount);
    }
  }
  return (
    <>
      <Player
        coordinates={{ posX: position.posX, posY: position.posY }}
      ></Player>
      <Mouse
        posX={mousePosition.posX}
        posY={mousePosition.posY}
        width={mouse_width}
        height={mouse_height}
        trigger={mouseTrigger}
      ></Mouse>
    </>
  );
}

export default App;
