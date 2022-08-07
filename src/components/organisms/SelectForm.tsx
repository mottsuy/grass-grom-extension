import React, {FC} from "react";
import styled from "@emotion/styled";
import Button from "../atoms/Button";
import PullDown from "../molecules/PullDown";

const Box = styled.div`
  display: flex;
`;

type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
  backgroundColor: string
}

const SelectForm:FC<Props> = (props) => {
  return (
    <Box>
      <PullDown onChange={(e) => console.log(e.value)}/>
      <Button
        onClick={props.onClick}
        disabled={props.disabled}
        backgroundColor={props.backgroundColor}
      />
    </Box>
  )
}

export default SelectForm;