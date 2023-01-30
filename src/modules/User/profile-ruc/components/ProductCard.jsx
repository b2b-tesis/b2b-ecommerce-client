import Link from "next/link";
import { Box, styled } from "@mui/material";

import BazaarCard from "../../../../common/components/BazaarCard";
import LazyImage from "../../../../common/components/LazyImage";
import { H3 } from "../../../../common/components/Typography";
import  FlexBox  from "../../../../common/components/flexbox/FlexBox";

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
const ContentWrapper = styled(Box)(() => ({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
}));

const ProductCard = (product) => {
  const {name, price, picture, id} = product;
  return (
    <StyledBazaarCard >
      <ImageWrapper>
        <Link href={`/producto/${id}`}>
          <a>
            <LazyImage
              src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${picture}`}
              width={0}
              height={0}
              layout="responsive"
              alt={name}
              placeholder="blur"
              blurDataURL={picture}
            />
          </a>
        </Link>
      </ImageWrapper>

      <ContentWrapper>
        <FlexBox>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/producto/${id}`}>
              <a>
                <H3
                  mb={1}
                  title={name}
                  fontSize="14px"
                  fontWeight="600"
                  className="title"
                  color="text.secondary"
                >
                  {name}
                </H3>
              </a>
            </Link>

        

            <FlexBox alignItems="center" gap={1} mt={0.5}>
              <Box fontWeight="600" color="primary.main">
                S/. {price}
              </Box>

            </FlexBox>
          </Box>

          <FlexBox
            width="30px"
            alignItems="center"
            className="add-cart"
            flexDirection="column-reverse"
            justifyContent={"flex-start"}
          >

          </FlexBox>
        </FlexBox>
      </ContentWrapper>
    </StyledBazaarCard>
  );
};

export default ProductCard;
