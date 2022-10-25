import { Box, TextField } from "@mui/material";
import React from "react";
import { Small } from "./Typography";

const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];

const CustomTextField = ({ label, InputProps, ...props }) => {
  const boxProps = {};
  const textFieldProps = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }
  return (
    <Box {...boxProps}>
      {label ? (
        <Small
          color="grey.700"
          display="block"
          fontWeight="600"
          mb={1}
          textAlign="left"
        >
          {label}
        </Small>
      ) : null}
      <TextField
        {...props}
        InputProps={{
          ...InputProps,
          style: { ...InputProps?.style, height: 44 },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

export default CustomTextField;
