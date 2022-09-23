import { useCallback, useEffect, useState } from "react";
import {Box, Card, Container, Grid, IconButton, MenuItem,TextField} from "@mui/material";
import { Apps, ViewList } from "@mui/icons-material";

import { H5, Paragraph } from "../../common/components/Typography";
import FlexBox from "../../common/components/flexbox/FlexBox";
import ProductCard1List from "../../common/components/products/ProductCardList1";
import ProductCard9List from "../../common/components/products/ProductCard9List";


const CategoryView = () => {

  const sortOptions = [
    {
      label: "Relevance",
      value: "Relevance",
    },
    {
      label: "Date",
      value: "Date",
    },
    {
      label: "Price Low to High",
      value: "Price Low to High",
    },
    {
      label: "Price High to Low",
      value: "Price High to Low",
    },
  ];
  
  const [view, setView] = useState("grid");
  const toggleView = useCallback((v) => () => setView(v), []);

  return (
    <>
     <Container
        sx={{
          mt: 4,
          mb: 6,
        }}
      >
        <Card
          elevation={1}
          sx={{
            mb: "55px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            p: {
              sm: "1rem 1.25rem",
              md: "0.5rem 1.25rem",
              xs: "1.25rem 1.25rem 0.25rem",
            },
          }}
        >
          <Box>
            <H5>Categorias</H5>
            <Paragraph color="grey.600">48 results found</Paragraph>
          </Box>

          <FlexBox
            alignItems="center"
            columnGap={4}
            flexWrap="wrap"
            my="0.5rem"
          >
            <FlexBox alignItems="center" gap={1} flex="1 1 0">
              <Paragraph color="grey.600" whiteSpace="pre">
                Short by:
              </Paragraph>

              <TextField
                select
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Short by"
                defaultValue={sortOptions[0].value}
                sx={{
                  flex: "1 1 0",
                  minWidth: "150px",
                }}
              >
                {sortOptions.map((item) => (
                  <MenuItem value={item.value} key={item.value}>
                    {item.label}
                  </MenuItem>
                ))}
              </TextField>
            </FlexBox>

            <FlexBox alignItems="center" my="0.25rem">
              <Paragraph color="grey.600" mr={1}>
                View:
              </Paragraph>

              <IconButton onClick={toggleView("grid")}>
                <Apps
                  color={view === "grid" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

              <IconButton onClick={toggleView("list")}>
                <ViewList
                  color={view === "list" ? "primary" : "inherit"}
                  fontSize="small"
                />
              </IconButton>

            </FlexBox>
          </FlexBox>
        </Card>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            {view === "grid" ? <ProductCard1List /> : <ProductCard9List />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CategoryView;
