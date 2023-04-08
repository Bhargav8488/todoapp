import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AddNewTodo, UpdateTodo } from "../redux/appSlice";
import { v4 as uuid } from "uuid";

const FormPage = () => {
  const [todoName, setTodoName] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { todos } = useSelector((state) => state.app);
  const param = useParams();

  useEffect(() => {
    if (todos && todos.length > 0) {
      const tempTodo = todos.find((todo) => todo.id === param.id);
      if (tempTodo) {
        setTodoName(tempTodo.name);
      } else {
        setTodoName("");
      }
    }
  }, [param.id, todos]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (location.pathname === "/add-todo") {
      if (!todoName) {
        alert("Please enter name of task");
      } else {
        const newTodo = {
          id: uuid(),
          name: todoName,
        };
        dispatch(AddNewTodo(newTodo));
        setTodoName("");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } else {
      dispatch(
        UpdateTodo({
          id: param.id,
          name: todoName,
        })
      );
      setTodoName("");
      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Todo Name"
          value={todoName}
          onChange={(e) => setTodoName(e.target.value)}
        />
        <Button type="submit">
          {location.pathname === "/add-todo" ? "Add Todo" : "Update Todo"}
        </Button>
      </Form>
    </Container>
  );
};

export default FormPage;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 80px);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  background-color: whitesmoke;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  @media screen and (max-width: 330px) {
    width: 280px;
  }
`;
const Input = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  width: 100%;
  background-color: lightgray;
  margin: 10px 0px 20px 0px;
  font-size: 18px;
`;
const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  background-color: white;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
