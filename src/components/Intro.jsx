import React from "react";
import styled from "styled-components";
import women from "../img/women.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 60px);
  /* background-color: red; */
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-style: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  font-weight: bold;
  color: #f0667d;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Vanakam Nishanthan Kanagasunderam</Title>
        <Desc>
          Situated in passara badulla district. we do communication, statinaries
          and much more for our customers
        </Desc>
        <Info>
          <Button>Start a project</Button>
          <Contact>
            <Phone>Call Us (055)-2288468</Phone>
            <ContactText>For any question or contact</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={women}></Image>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
