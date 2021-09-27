import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  height: 70vh;
  border: 1px solid #ebecf0;
  margin: 100px auto;
  max-width: 400px;
  box-sizing: border-box;
  box-shadow: 10px 10px 10px #ebecf0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #234f1e;
  padding: 10px;
  position: relative;
`;

export const Button = styled.button`
  width: 90%;
  background-color: #234f1e;
  color: white;
  margin: 10px auto;
  height: 55px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  box-sizing: border-box;
`;
