import styled from "styled-components";
import { PlayerProps } from "../types";

const Player = ({ coordinates }: PlayerProps) => {
  return (
    <Box posX={coordinates.posX} posY={coordinates.posY}>
      P
    </Box>
  );
};

const Box = styled.div<{ posX: number; posY: number }>`
  position: absolute;
  top: ${(props) => props.posY}px;
  left: ${(props) => props.posX}px;
  width: 50px;
  height: 50px;
  background-color: black;
  margin: 20px;
`;

export default Player;
