import React, { FC } from "react";
import styled from '@emotion/styled';

const StyledButton = styled.button<{ backgroundColor: string; }>`
  padding: 5px 20px;
  cursor: pointer;
  border-radius: 15px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor};
  border-bottom: 5px solid #b84c00;
  &:hover {
    margin-top: 3px;
    color: #fff;
    background: ${(props) => props.backgroundColor};
    border-bottom: 2px solid #b84c00;
  }
  display: block;
  margin: auto;
  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
  box-shadow: 0 3px 5px rgba(0, 0, 0, .3);
`;

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
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