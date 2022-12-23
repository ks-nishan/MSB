import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  /* background-color: blue; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  font-family: "Changa", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h4`
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: crimson;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Manishara's</Logo>
          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>HFeaturesome</MenuItem>
            <MenuItem>ServicesPricing</MenuItem>
            <MenuItem>Home</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>JOIN NOW</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
