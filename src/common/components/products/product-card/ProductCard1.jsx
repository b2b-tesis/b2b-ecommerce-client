import { Fragment, useCallback, useState } from "react";
import Link from "next/link";
/* eslint-disable react-hooks/exhaustive-deps */
import { Add, Remove, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Chip, IconButton, styled } from "@mui/material";
import BazaarCard from "../../BazaarCard";
import LazyImage from "../../LazyImage";
import ProductViewDialog from "../ProductViewDialog";
import { H3, Span } from "../../Typography";
import { useAppContext } from "../../../contexts/AppContext";
import  FlexBox  from "../../flexbox/FlexBox";

const StyledBazaarCard = styled(BazaarCard)(() => ({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  ":hover": {
    "& .hover-box": {
      opacity: 1,
    },
  },
}));
const ImageWrapper = styled(Box)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));
const StyledChip = styled(Chip)(() => ({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
}));
const HoverIconWrapper = styled(Box)(({ theme }) => ({
  zIndex: 2,
  top: "7px",
  opacity: 0,
  right: "15px",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
}));
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
})); // ========================================================

// ========================================================
const ProductCard1 = ({
  id,
  name,
  // title,
  // price,
  // imgUrl,
  // showProductSize,
    picture,
    price,
    user_name
}) => {
  // const { state, dispatch } = useAppContext();
  const [openModal, setOpenModal] = useState(false);


  const toggleDialog = useCallback(() => setOpenModal((open) => !open), []);

  return (
    <StyledBazaarCard >
      <ImageWrapper>


        <HoverIconWrapper className="hover-box">
          <IconButton onClick={toggleDialog}>
            <RemoveRedEye color="disabled" fontSize="small" />
          </IconButton>

        </HoverIconWrapper>

        <Link href={`/producto/${id}`}>
          <a>
            <LazyImage
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${picture}`}
              width={0}
              height={0}
              layout="responsive"
              alt={'Producto'}
              placeholder="blur"
              
              blurDataURL={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${picture}`}
            />
          </a>
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${id}`}>
              <a>
                <H3
                  mb={1}
                  title={name}
                  fontSize="14px"
                  fontWeight="600"
                  className="title"
                  color="text.secondary"
                >
                  Producto: {name}
                </H3>
              </a>
            </Link>

            <H3
                  mb={1}
                  title={name}
                  fontSize="14px"
                  fontWeight="600"
                  className="title"
                  color="text.secondary"
                >
                  Vendido por: {user_name}
            </H3>

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box fontWeight="600" color="primary.main">
                S/. {price}
              </Box>

            </FlexBox>
          </Box>

        </FlexBox>
      </ContentWrapper>
    </StyledBazaarCard>
  );
};

export default ProductCard1;
