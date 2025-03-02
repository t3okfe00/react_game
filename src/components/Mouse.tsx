import styled, { keyframes } from "styled-components";
import { MouseProps } from "../types";
import React, { useEffect } from "react";

const Mouse = ({ posX, posY, width, height, trigger }: MouseProps) => {
  useEffect(() => {
    console.log("USE EFFECT!!!");
  }, [trigger]);
  return (
    <Box
      posX={posX}
      posY={posY}
      width={width}
      height={height}
      key={trigger}
    ></Box>
  );
};

const explosion = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0.9;
    background-color: rgba(255, 60, 0, 0.8);
    box-shadow: 0 0 10px rgba(255, 120, 0, 0.8), inset 0 0 10px rgba(255, 255, 0, 0.6);
  }
  20% {
    transform: scale(1);
    background-color: rgba(255, 180, 0, 0.8);
    box-shadow: 0 0 25px rgba(255, 150, 0, 0.8), inset 0 0 15px rgba(255, 255, 0, 0.6);
  }
  50% {
    transform: scale(2);
    background-color: rgba(255, 230, 0, 0.7);
    box-shadow: 0 0 40px rgba(255, 200, 0, 0.7), inset 0 0 20px rgba(255, 100, 0, 0.7);
  }
  80% {
    transform: scale(3);
    opacity: 0.4;
    background-color: rgba(255, 100, 0, 0.3);
    box-shadow: 0 0 30px rgba(255, 100, 0, 0.3), inset 0 0 10px rgba(255, 50, 0, 0.5);
  }
  100% {
    transform: scale(4);
    opacity: 0;
    background-color: rgba(255, 0, 0, 0);
    box-shadow: 0 0 0 rgba(255, 0, 0, 0);
  }
`;

const Box = styled.div<{
  posX: number;
  posY: number;
  width: number;
  height: number;
}>`
  position: absolute;
  top: ${(props) => props.posY - 20}px;
  left: ${(props) => props.posX - 20}px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 50%;
  animation: ${explosion} 0.5s ease-out forwards;
  box-shadow: 0 0 10px rgba(255, 60, 0, 0.6),
    inset 0 0 5px rgba(255, 255, 0, 0.6);
`;

export default Mouse;
