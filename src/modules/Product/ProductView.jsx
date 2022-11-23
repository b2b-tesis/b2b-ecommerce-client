import { useState } from "react";
import { Box, Container, styled, Tab, Tabs } from "@mui/material";
import ProductIntro from "./ProductIntro";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

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

const ProductView = ({productData}) => {
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
          <ProductIntro product={productData} /> 

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
          {selectedOption === 0 && <ProductDescription description={productData.description}/>}
          {selectedOption === 1 && <ProductReview />}
        </Box>

      </Container>
    </>
  );
};

export default ProductView;
