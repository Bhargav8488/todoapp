import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onButtonPress = () => {
    if (location.pathname === "/add-todo") {
      navigate("/");
    } else {
      navigate("/add-todo");
    }
  };
  return (
    <Container>
      <LeftContainer to={"/"}>
        <Title>Todo-App</Title>
      </LeftContainer>
      <RightContainer>
        <Button onClick={() => onButtonPress()}>
          {location.pathname === "/add-todo" ? "Go Back" : "Add New Task"}
        </Button>
      </RightContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  height: 80px;
  background-color: white;
  user-select: none;
  width: 100%;
  position: sticky;
  top: 0;
`;
const LeftContainer = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Title = styled.h1`
  cursor: pointer;
  @media screen and (max-width: 330px) {
    font-size: 18px;
  }
`;
const RightContainer = styled.div``;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
