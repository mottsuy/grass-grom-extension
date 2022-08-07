import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const Box = styled.div`
  width: 400px;
  padding: 50px;
  padding-top:20px;
`;
const Container: FC<ReactNode> = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Container;