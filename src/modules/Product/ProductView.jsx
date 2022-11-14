import { useEffect, useState } from "react";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ProductIntro from "./ProductIntro";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

// import ShopLayout1 from "components/layouts/ShopLayout1";
// import AvailableShops from "components/products/AvailableShops";
// import FrequentlyBought from "components/products/FrequentlyBought";
// import ProductDescription from "components/products/ProductDescription";
// import ProductIntro from "components/products/ProductIntro";
// import ProductReview from "components/products/ProductReview";
// import RelatedProducts from "components/products/RelatedProducts";
// import { H2 } from "components/Typography";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  "& .inner-tab": {
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },
}));

const ProductView = () => {
  const [product, setProduct] = useState( {
    price: 168,
    title: "Lord 2019",
    imgUrl: "/assets/images/products/1.Ford2019.png",
    category: "automotive",
    unit: "kg",
    discount: 8,
    id: "7222243834583537",
    rating: 2,
    imgGroup: [
      "/assets/images/products/1.Ford2019.png",
      "/assets/images/products/2.Audi2017.png",
      "/assets/images/products/3.Porsche2018.png",
      "/assets/images/products/4.Ford2020.png",
    ],
  },);
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (_, value) => setSelectedOption(value);

  return (
    <>
     <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
          <ProductIntro product={product} /> 

          <StyledTabs
            textColor="primary"
            value={selectedOption}
            indicatorColor="primary"
            onChange={handleOptionClick}
          >
            <Tab className="inner-tab" label="Description" />
            <Tab className="inner-tab" label="Review (3)" />
          </StyledTabs>

          <Box mb={6}>
          {selectedOption === 0 && <ProductDescription />}
          {selectedOption === 1 && <ProductReview />}
        </Box>

      </Container>
    </>
  );
};

export default ProductView;
