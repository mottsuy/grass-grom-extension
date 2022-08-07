import React, { FC } from "react";
import styled from '@emotion/styled';

// const StyledButton = styled.button<{ backgroundColor: string; }>`
  // padding: 5px 20px;
  // cursor: pointer;
//   border-radius: 15px;
//   color: #fff;
//   background-color: ${(props) => props.backgroundColor};
//   border-bottom: 5px solid ${(props) => props.backgroundColor};
  // &:hover {
  //   margin-top: 3px;
  //   color: #fff;
  //   background: ${(props) => props.backgroundColor};
  //   border-bottom: 2px solid ${(props) => props.backgroundColor};
  // }
//   display: block;
//   margin: auto;
//   -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
//   box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
// `;

const StyledButton = styled.button<{ backgroundColor: string; }>`
  background-color: transparent;
  color: ${(props) => props.backgroundColor};
  border-radius: 15px;
  border-color: ${(props) => props.backgroundColor};
  padding: 5px 20px;
  cursor: pointer;
  &:hover {
    margin-top: 3px;
    color: #fff;
    background: ${(props) => props.backgroundColor};
  }
  display: block;
`;

type Props = {
  onClick: () => void
  disabled: boolean
  backgroundColor: string
}

const Button: FC<Props> = props => {
  return(
      <StyledButton 
        onClick={props.onClick} 
        disabled={props.disabled} 
        backgroundColor={props.backgroundColor}
      >
        変更する
      </StyledButton>
  )
}

export default Button;