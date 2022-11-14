import {Box, Button, Card, Checkbox, Divider, FormControlLabel, Rating, TextField} from "@mui/material";
import BazaarButton from "../../../../common/components/BazaarButton";

// import { H5, H6, Paragraph, Span } from "components/Typography";
import FlexBetween from "../../../../common/components/flexbox/FlexBetween";
import FlexBox from "../../../../common/components/flexbox/FlexBox";
import { H5, H6, Span } from "../../../../common/components/Typography";

const ProductFilterCard = () => {
  return (
    <Card
      sx={{
        p: "18px 27px",
        overflow: "auto",
      }}
      elevation={1}
    >
      <H6 mb={1.25}>Categories</H6>
      {productCategory.map((item) => (
        <FormControlLabel
          key={item}
          sx={{
            display: "flex",
          }}
          label={<Span color="primary">{item}</Span>}
          control={<Checkbox size="small" color="primary" />}
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
        <BazaarButton size="small" color="primary" variant="contained">
          Buscar
        </BazaarButton>
      </FlexBox>

      <FlexBetween sx={{paddingTop:3}}>
        <TextField placeholder="0" type="number" size="small" fullWidth />
        <H5 color="grey.600" px={1}>
          -
        </H5>
        <TextField placeholder="250" type="number" size="small" fullWidth />
      </FlexBetween>

      <Divider
        sx={{
          my: 3,
        }}
      />

    <H6 mb={2}>Por stock</H6>
      {stockOptions.map((item) => (
        <FormControlLabel
          key={item}
          sx={{
            display: "flex",
          }}
          label={<Span color="primary">{item}</Span>}
          control={<Checkbox size="small" color="primary" />}
        />
      ))}

      <Divider
        sx={{
          my: 3,
        }}
      />

      <H6 mb={2}>Por puntuación</H6>
      {[5, 4, 3, 2, 1].map((item) => (
        <FormControlLabel
          control={<Checkbox size="small" color="primary" />}
          label={<Rating size="small" value={item} color="warn" readOnly />}
          sx={{
            display: "flex",
          }}
          key={item}
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

const productCategory = ["Laptops", "Teclados", "Mouse", "Monitores", "Alfombrillas", "Laptops", "Teclados", "Mouse", "Monitores", "Alfombrillas", "Laptops", "Teclados", "Mouse", "Monitores", "Alfombrillas"];
const stockOptions = ["Limitado", "Ilimitado"];

export default ProductFilterCard;
