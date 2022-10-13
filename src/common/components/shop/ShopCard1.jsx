import Link from "next/link";
import React from "react"; 
import { Call, East, Place } from "@mui/icons-material";
import {alpha, Avatar, Box, Card, IconButton, Rating, styled} from "@mui/material";

import { H3, Span } from "../Typography";
import FlexBetween from "../flexbox/FlexBetween";
import FlexBox from "../flexbox/FlexBox";


const ContentWrapper = styled(Box)(({ theme, imgUrl }) => ({
  color: "white",
  backgroundSize: "cover",
  padding: "17px 30px 56px",
  backgroundPosition: "center",
  backgroundImage: `linear-gradient(to bottom,
    ${alpha(theme.palette.grey[900], 0.8)}, ${alpha(
    theme.palette.grey[900],
    0.8
  )}), 
    url(${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${imgUrl})`,
})); // ================================================================

// ================================================================
const ShopCard1 = (props) => {
  const { banner, picture, department, district, province, phone, name, ruc } = props;
  return (
    <Card>
      <ContentWrapper imgUrl={banner}>
        <H3 fontWeight="600" mb={1}>
          {name}
        </H3>


        <FlexBox mb={1} gap={1}>
          <Place
            fontSize="small"
            sx={{
              fontSize: 17,
              mt: "3px",
            }}
          />
          <Span color="white">{department} | {province} | {district}</Span>
        </FlexBox>

        <FlexBox alignItems="center" gap={1}>
          <Call
            fontSize="small"
            sx={{
              fontSize: 17,
            }}
          />
          <Span color="white">{phone}</Span>
        </FlexBox>
      </ContentWrapper>

      <FlexBetween pl={3} pr={1}>
        <Avatar
          src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/user?filename=${picture}`}
          sx={{
            width: 64,
            height: 64,
            mt: "-32px",
            border: "3px solid",
            borderColor: "grey.100",
          }}
        />
        <Link href={`/usuario/${ruc}`}>
          <a>
            <IconButton
              sx={{
                my: 0.5,
              }}
            >
              <East
                sx={{
                  fontSize: 19,
                  transform: ({ direction }) =>
                    `rotate(${direction === "rtl" ? "180deg" : "0deg"})`,
                }}
              />
            </IconButton>
          </a>
        </Link>
      </FlexBetween>
    </Card>
  );
};

export default ShopCard1;
