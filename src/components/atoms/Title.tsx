import React, { FC } from "react";
import styled from "@emotion/styled";

const StyledH1 = styled.h1`
  display: inline-block;
  background: linear-gradient(90deg, #4158D0, #C850C0 30%, #FFCC70);
  background: -webkit-linear-gradient(0deg, #4158D0, #C850C0 30%, #FFCC70);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title:FC = () => {
  return (
    <StyledH1>
      gECC
    </StyledH1>
  )
}

export default Title;