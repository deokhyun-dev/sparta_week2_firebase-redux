import React from "react";
import styled from "styled-components";
import ChairIcon from "@mui/icons-material/Chair";

const Spinner = props => {
  return (
    <Outter>
      <ChairIcon
        style={{
          fontSize: "200px",
          color: "#234f1e",
        }}
      />
    </Outter>
  );
};

const Outter = styled.div`
  background-color: #74b72e;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Spinner;
