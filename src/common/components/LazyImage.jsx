import React from "react";
import NextImage from "next/image";
import { bgcolor, borderRadius, compose, spacing, styled } from "@mui/system";
const LazyImage = styled(({ borderRadius, ...rest }) => (
  <NextImage {...rest} />
))(compose(spacing, borderRadius, bgcolor));
export default LazyImage;
