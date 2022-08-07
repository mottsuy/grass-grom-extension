import React, { FC } from "react";
import Select, { StylesConfig } from "react-select";
import styled from "@emotion/styled";
import { ColorOption, colourOptions } from "../../constants/dot";

const Box = styled.div`
width: 70%;
margin: 0 auto;
`;

const dot = (color = "transparent") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 10,
    width: 10
  }
});

type Props = {
  onChange: (e:any) => void;
  onMenuOpen:() => void;
  onMenuClose:() => void;
}

const colourStyles: StylesConfig<ColorOption> = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? "white"
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? data.type === 'white'
          ? 'white'
          : 'black'
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? data.color
            : data.color04
          : undefined
      }
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const PullDown:FC<Props> = (props) => {
  return(
  <Box>
    <Select
      defaultValue={colourOptions[0]}
      options={colourOptions}
      styles={colourStyles}
      onChange={props.onChange}
      onMenuOpen={props.onMenuOpen}
      onMenuClose={props.onMenuClose}
    />
  </Box>
  );
};

export default PullDown;
