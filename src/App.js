import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";

import styled from "styled-components";
import { Container } from "./element";
import WordList from "./WordList";
import WordDetail from "./WordDetail";
import Update from "./Update";
import RegisterWord from "./RegisterWord";
import { loadWordFB } from "./redux/modules/word";

function App() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadWordFB());
    return () => {};
  }, []);

  return (
    <div className="App">
      <Container>
        <Route path="/" exact>
          <WordList />
          <PlusButton onClick={() => history.push("/register")}>+</PlusButton>
        </Route>
        <Route path="/detail/:index">
          <WordDetail />
        </Route>
        <Route path="/register">
          <RegisterWord />
        </Route>
        <Route path="/update/:index">
          <Update />
        </Route>
      </Container>
    </div>
  );
}

const PlusButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background-color: yellow;
  position: absolute;
  margin-top: 400px;
  margin-left: 280px;
  text-align: center;
  font-size: 40px;
  z-index: 1000;
  &:hover {
    cursor: pointer;
  }
`;

// 페이지

// 3. 추가 구현 기능
// - 무한 스크롤 붙이기
// - 게시글 수정해보기

export default App;
