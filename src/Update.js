import React, { useRef } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Button, Container } from "./element";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { updateWordFB } from "./redux/modules/word";

function Update(props) {
  const index = useParams().index;
  const list = useSelector(state => state.word.list);
  const tempWord = list[index];
  console.log(tempWord);

  const word = useRef(null);
  const wordDescription = useRef(null);
  const wordExample = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const updateWord = () => {
    let wordValue = word.current.value || tempWord.word;
    let descriptionValue =
      wordDescription.current.value || tempWord.description;
    let exampleValue = wordExample.current.value || tempWord.example;
    let wordData = {
      word: wordValue,
      description: descriptionValue,
      example: exampleValue,
    };

    console.log(wordData);

    dispatch(updateWordFB(wordData, tempWord.id));
    history.push("/");
    // history.push("/");
  };

  const updateWord = () => {
    const newWord = {
      word: word_Ref,
      description: description_Ref,
      example: example_Ref
    }

    dispatch(updateWordFB(wordData, tempWord.id));
  }

  

  return (
    <>
      <Header>{tempWord ? tempWord.word : ""} 수정하기</Header>
      <InputContainer>
        <TextField
          label={tempWord ? tempWord.word : ""}
          type="text"
          defaultValue="alsdkfjasdf"
          inputRef={word}
          style={{
            width: "90%",
            margin: "10px auto",
            paddingTop: "5px",
          }}
        />
        <TextField
          label={tempWord ? tempWord.description : ""}
          inputRef={wordDescription}
          style={{
            width: "90%",
            margin: "10px auto",
          }}
        />
        <TextField
          label={tempWord ? tempWord.example : ""}
          inputRef={wordExample}
          style={{
            width: "90%",
            margin: "10px auto",
          }}
        />
        <Button onClick={updateWord}>수정하기</Button>
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

export default Update;
