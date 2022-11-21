import {Card, Checkbox, Divider, FormControlLabel, Rating, TextField} from "@mui/material";

import BazaarButton from "../../../../common/components/BazaarButton";
import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { H5, H6, Span } from "../../../../common/components/Typography";
import { useFilterProducts } from "../hooks/useFilterProducts";

const ProductFilterCard = ({productCategories}) => {
  
    const {filterByCategoryProduct, filterByStock, filterByRate, minPrice, maxPrice, setMinPrice, setMaxPrice, filterPriceRange, getProducts} = useFilterProducts();
  return (
    <Card
      sx={{
        p: "18px 27px",
        overflow: "auto",
      }}
      elevation={1}
    >
      <H6 mb={1.25}>Categorías</H6>
      {productCategories?.map((category, index) => (
        <FormControlLabel
          key={index}
          sx={{
            display: "flex",
          }}
          label={<Span color="primary">{category.name}</Span>}
          control={<Checkbox size="small" color="primary" value={category.id} onChange={(e) => filterByCategoryProduct(e)}/>}
        />
      ))}

      <Divider
        sx={{
          mt: 2,
          mb: 3,
        }}
      />

      <FlexBox justifyContent="space-between" alignItems="center">
        <H6 >Rango de precio</H6>
        <BazaarButton size="small" color="primary" variant="contained" onClick={getProducts}>
          Buscar
        </BazaarButton>
      </FlexBox>

      <FlexBetween sx={{paddingTop:3}}>
        <TextField placeholder="0" type="number" size="small" fullWidth name="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
        <H5 color="grey.600" px={1}>
          -
        </H5>
        <TextField placeholder="5000" type="number" size="small" fullWidth name="maxPrice" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
      </FlexBetween>

      <Divider
        sx={{
          my: 3,
        }}
      />

    <H6 mb={2}>Por stock</H6>
      {stockOptions.map((item, index) => (
        <FormControlLabel
          key={index}
          sx={{
            display: "flex",
          }}
          label={<Span color="primary">{item}</Span>}
          control={<Checkbox size="small" color="primary" value={item} onChange={(e) => filterByStock(e)}/>}
        />
      ))}

      <Divider
        sx={{
          my: 3,
        }}
      />

      <H6 mb={2}>Por puntuación</H6>
      {ratedOptions.map((item, index) => (
        <FormControlLabel
          control={<Checkbox size="small" color="primary" value={item} onChange={(e) => filterByRate(e)}/>}
          label={<Rating size="small"  color="warn" readOnly value={item}/>}
          sx={{
            display: "flex",
          }}
          key={index}
        />
      ))}

      <Divider
        sx={{
          my: 3,
        }}
      />

    </Card>
  );
};

const stockOptions = ["Limitado", "Ilimitado"];
const ratedOptions = [1,2,3,4,5]

export default ProductFilterCard;
