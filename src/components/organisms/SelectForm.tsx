import React, {FC} from "react";
import styled from "@emotion/styled";
import Button from "../atoms/Button";
import PullDown from "../molecules/PullDown";

const Box = styled.div`
  display: flex;
`;

type Props = {
  onClick: () => void
  disabled: boolean
  backgroundColor: string
  onChange: (e:any) => void
  onMenuOpen:() => void;
  onMenuClose:() => void;
}

const SelectForm:FC<Props> = (props) => {
  return (
    <Box>
      <PullDown 
        onChange={props.onChange}
        onMenuOpen={props.onMenuOpen}
        onMenuClose={props.onMenuClose}
        />
      <Button
        onClick={props.onClick}
        disabled={props.disabled}
        backgroundColor={props.backgroundColor}
      />
    </Box>
  )
}

export default SelectForm;