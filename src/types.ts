import { MovementAmount } from "./enums";

export type PlayerProps = {
  coordinates: Position;
};

export type Position = {
  posX: number;
  posY: number;
};

export type displacement = {
  axis: PositionKey;
  amount: MovementAmount;
};

export type PositionKey = "posX" | "posY";

export type MouseProps = {
  posX: number;
  posY: number;
  width: number;
  height: number;
  trigger: boolean;
};
