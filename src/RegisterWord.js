import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button, Container } from "./element";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerWordFB } from "./redux/modules/word";

function RegisterWord(props) {
  const word = useRef(null);
  const wordDescription = useRef(null);
  const wordExample = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const addWord = () => {
    let wordValue = word.current.value;
    let descriptionValue = wordDescription.current.value;
    let exampleValue = wordExample.current.value;
    let wordData = {
      word: wordValue,
      description: descriptionValue,
      example: exampleValue,
    };

    dispatch(registerWordFB(wordData));
    history.push("/");
  };

  return (
    <>
      <Header> 단어 추가하기</Header>
      <InputContainer>
        <TextField
          label="단어"
          type="text"
          inputRef={word}
          style={{
            width: "90%",
            margin: "10px auto",
            paddingTop: "5px",
          }}
        />
        <TextField
          label="설명"
          inputRef={wordDescription}
          style={{
            width: "90%",
            margin: "10px auto",
          }}
        />
        <TextField
          label="예시"
          inputRef={wordExample}
          style={{
            width: "90%",
            margin: "10px auto",
          }}
        />
        <Button onClick={addWord}>추가하기</Button>
      </InputContainer>
    </>
  );
}

const Header = styled.h2`
  color: white;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: white;
  border-radius: 5px;
  max-height: 50vh;
`;

export default RegisterWord;
