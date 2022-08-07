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
}

const SelectForm:FC<Props> = (props) => {
  return (
    <Box>
      <PullDown onChange={props.onChange}/>
      <Button
        onClick={props.onClick}
        disabled={props.disabled}
        backgroundColor={props.backgroundColor}
      />
    </Box>
  )
}

export default SelectForm;