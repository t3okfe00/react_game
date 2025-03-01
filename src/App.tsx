import { useState, useEffect } from "react";
import { MovementAmount } from "./enums";
import { movementMap } from "./enums";
import Player from "./components/Player";
import { displacement, PositionKey } from "./types";

function App() {
  const [position, setPosition] = useState<{ posX: number; posY: number }>({
    posX: 25,
    posY: 25,
  });

  useEffect(() => {
    window.addEventListener("keydown", moveOnKeyPress);
    return () => {
      window.removeEventListener("keydown", moveOnKeyPress);
    };
  });

  const updatePosition = (axis: PositionKey, amount: MovementAmount) => {
    setPosition((prev) => ({
      ...prev,
      [axis]: prev[axis] + amount,
    }));
  };

  function moveOnKeyPress(e: KeyboardEvent) {
    const movement: displacement = movementMap[e.key];
    console.log("Movement is ", movement);

    if (movement) {
      updatePosition(movement.axis, movement.amount);
    }
  }
  return (
    <>
      <Player
        coordinates={{ posX: position.posX, posY: position.posY }}
      ></Player>
    </>
  );
}

export default App;
