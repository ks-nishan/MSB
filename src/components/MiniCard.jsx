import React from "react";
import styled from "styled-components";
import Search from "../img/search.png";

const Container = styled.div`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: -1px 11px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 11px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 11px 25px -6px rgba(0, 0, 0, 0.75);
`;

const Image = styled.img`
  width: 20px;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = () => {
  return (
    <Container>
      <Image src={Search} />
      <Text>i am nishanthan from sliit</Text>
    </Container>
  );
};

export default MiniCard;
