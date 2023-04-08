import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import FormPage from "./pages/FormPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route exact path="/add-todo" Component={FormPage} />
          <Route exact path="/update-todo/:id" Component={FormPage} />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  max-width: 1366px;
  margin: auto;
`;
