import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;
  animation: circle 15s linear alternate infinite;

  @keyframes circle {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const CircleTwo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff97af;
  position: absolute;
  top: 400px;
  left: -100px;
  z-index: -1;
  animation: circleTwo 20s linear alternate infinite;

  @keyframes circleTwo {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Rect = styled.div`
  width: 50px;
  height: 100px;
  background-color: #669966;
  opacity: 0.5;
  position: absolute;
  top: 500px;
  left: -0px;
  z-index: -1;
  animation: rect 20s linear alternate infinite;

  @keyframes rect {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: #102584;
  opacity: 0.5;
  position: absolute;
  top: 70px;
  left: -50px;
  z-index: -1;
  animation: square 15s linear alternate infinite;

  @keyframes square {
    to {
      transform: translate(100vw, 60vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Square />
      <Circle />
      <CircleTwo />
      <Rect />
    </>
  );
};

export default AnimatedShapes;
