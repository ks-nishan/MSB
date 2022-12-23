import React from "react";
import styled from "styled-components";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  clip-path: polygon(65% 0, 100% 0%, 100% 100%, 73% 100%, 56% 33%);
  background-color: crimson;
`;

const App = () => {
  return (
    <Container>
      <Navbar />
      <Intro />
      <IntroShape />
    </Container>
  );
};

export default App;