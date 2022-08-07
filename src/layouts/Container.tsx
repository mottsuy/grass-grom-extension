import React, { FC, ReactNode } from "react";
import styled from "@emotion/styled";

const Box = styled.div`
  width: 400px;
  padding: 50px;
`;
const Container: FC<ReactNode> = ({children}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default Container;