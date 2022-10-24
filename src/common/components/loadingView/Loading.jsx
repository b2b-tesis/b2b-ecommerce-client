import React from "react";
import { CircularProgress } from "@mui/material";
import FlexBox from "../flexbox/FlexBox";

const Loading = () => {
  return (
    <FlexBox justifyContent="center">
      <CircularProgress color="primary" size={40} />
    </FlexBox>
  );
};

export default Loading;
