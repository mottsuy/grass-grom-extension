import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const Box = styled.div<{ isMenuOpen: boolean; }>`
  width: 400px;
  padding: 50px;
  padding-top:20px;
  height: ${(props) => props.isMenuOpen && '270px'};
`;

type Props = {
  children: ReactNode
  isMenuOpen: boolean
}

const Container: FC<Props> = (props) => {
  return (
    <Box isMenuOpen={props.isMenuOpen}>
      {props.children}
    </Box>
  )
}

export default Container;