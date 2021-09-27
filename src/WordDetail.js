import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import styled from "styled-components";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Spinner from "./Spinner";
import { loadWordFB, removeWordFB } from "./redux/modules/word";

function WordDetail() {
  const history = useHistory();
  const index = useParams().index;
  const { list, is_loaded } = useSelector(state => state.word);

  const word = list[index];

  const dispatch = useDispatch();

  return (
    <div>
      {!is_loaded && <Spinner />}
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            {word ? word.word : ""}
          </Typography>
          <Typography variant="h3" component="div"></Typography>
          {word ? word.description : ""} <br />
          <Typography variant="body2">{word ? word.example : ""}</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              history.push(`/update/${index}`);
            }}
            variant="outlined"
            size="medium"
          >
            수정
          </Button>
          <Button
            onClick={() => {
              dispatch(removeWordFB(word.id));
              history.push("/");
            }}
            variant="outlined"
            size="medium"
            color="error"
          >
            삭제
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const Header = styled.h2`
  color: white;
  margin-left: 10px;
`;

export default WordDetail;

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
