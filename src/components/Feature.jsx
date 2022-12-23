import React from "react";
import styled from "styled-components";
import phonePay from "../img/phonePay.webp";
import women from "../img/women.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 80%;
  margin-top: 5%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 70px;
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: darkblue;
  border-radius: 10px;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={women} />
      </Left>
      <Right>
        <Title>
          <b>Good</b> Design <br />
          <b>Good</b> Bussiness
        </Title>
        <SubTitle>We know that good design is good bussiness</SubTitle>
        <Desc>
          asfasf argser aergser gaergaerg aergaer aegr nfujryt werqer gwrtherth
          eryje tyjtyje 6hw5gw ethwrthw rthwtrhw thwt rhjwrthw thwtrhw rtjwt rhw
          thw ethwtrjryumeserg qr
        </Desc>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Feature;
