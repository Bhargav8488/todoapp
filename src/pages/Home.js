import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../components/TodoCard";
import styled from "styled-components";

const HomePage = () => {
  const { todos } = useSelector((state) => state.app);
  return (
    <Container>
      {todos.length > 0 &&
        todos.map((todo) => {
          return <TodoCard title={todo.name} key={todo.id} id={todo.id} />;
        })}
    </Container>
  );
};

export default HomePage;
const Container = styled.div``;
