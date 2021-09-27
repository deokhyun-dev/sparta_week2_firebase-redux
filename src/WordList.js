import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Spinner from "./Spinner";

function WordList() {
  const { list, is_loaded } = useSelector(state => state.word);
  const history = useHistory();

  return (
    <>
      <Header>My Dictionary</Header>
      <WordContainer>
        {list.map((word, index) => {
          return (
            <WordBox
              onClick={() => history.push(`/detail/${index}`)}
              key={index}
            >
              <Label>단어</Label>
              <Description>{word.word}</Description>
              <Label>설명</Label>
              <Description>{word.description}</Description>
              <Label>예시</Label>
              <Description style={{ color: "#03ac13" }}>
                {word.example}
              </Description>
            </WordBox>
          );
        })}
      </WordContainer>
      {!is_loaded && <Spinner />}
    </>
  );
}

const Header = styled.h2`
  color: white;
  margin-left: 10px;
`;

const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  /* overflow-y: auto; */
  height: 50vh;
`;

const WordBox = styled.div`
  width: 90%;
  border: 1px solid black;
  color: black;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
`;

const Label = styled.p`
  text-decoration: underline;
  font-weight: bold;
  color: #234f1e;
  margin: 0 auto;
`;

const Description = styled.p`
  font-size: 18px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export default WordList;
