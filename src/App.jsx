import React from "react";
import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(65% 0, 100% 0%, 100% 100%, 73% 100%, 56% 33%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 20% 0, 51% 100%, 0% 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 26% 0, 26% 100%, 0% 100%);
  background-color: green;
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
      </Container>
    </>
  );
};

export default App;
