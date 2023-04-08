import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RemoveItemFromTodo } from "../redux/appSlice";
import { useNavigate } from "react-router-dom";

const TodoCard = ({ title, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteButtonPress = () => {
    if (id) {
      dispatch(RemoveItemFromTodo(id));
    }
  };
  const onEditButtonPress = () => {
    navigate(`/update-todo/${id}`);
  };
  return (
    <Container>
      <LeftContainer>
        <Title>{title}</Title>
      </LeftContainer>
      <RightContainer>
        <Button onClick={() => onEditButtonPress()}>Edit</Button>
        <Button onClick={() => onDeleteButtonPress()}>Delet</Button>
      </RightContainer>
    </Container>
  );
};

export default TodoCard;

const Container = styled.div`
  margin: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 320px) {
    flex-direction: column;
  }
`;
const LeftContainer = styled.div``;
const RightContainer = styled.div``;
const Title = styled.h1`
  @media screen and (max-width: 420px) {
    font-size: 19px;
  }
`;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 10px;
  @media screen and (max-width: 320px) {
    margin-top: 20px;
  }
`;
