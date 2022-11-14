import Link from "next/link";
import {Autocomplete, Button, Card, Container, Divider, Grid, MenuItem, TextField} from "@mui/material";

import FlexBetween from "../../common/components/flexbox/FlexBetween";
import FlexBox from "../../common/components/flexbox/FlexBox";
import CheckoutNavLayout from "../../common/components/layouts/checkout/CheckoutNavLayout";
import { Span } from "../../common/components/Typography";
import { useAppContext } from "../../common/contexts/AppContext";
import ProductCard7 from "./components/ProductCard7";


const CartView = () => {
  const { state } = useAppContext();
  const cartList = state.cart;

  const getTotalPrice = () => {
    return cartList.reduce((accum, item) => accum + item.price * item.qty, 0);
  };
  return (
    <>

          <CheckoutNavLayout>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          {cartList.map((item) => (
            <ProductCard7 key={item.id} {...item} />
          ))}
        </Grid>

        <Grid item md={4} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}
          >
            <FlexBetween mb={2}>
              <Span color="grey.600">Total:</Span>

              <Span fontSize={18} fontWeight={600} lineHeight="1">
                ${getTotalPrice().toFixed(2)}
              </Span>
            </FlexBetween>

            <Divider
              sx={{
                mb: 2,
              }}
            />

            <FlexBox alignItems="center" columnGap={1} mb={2}>
              <Span
                p="6px 10px"
                fontSize={12}
                lineHeight="1"
                borderRadius="3px"
                color="primary.main"
                bgcolor="primary.light"
              >
                Nota:
              </Span>
              <Span fontWeight="600">El envío y su costo es coordinado entre el comprador y vendedor a través del chat, que se genera una vez la orden es guardada en el siguiente paso.</Span>
            </FlexBox>




            <Divider
              sx={{
                mb: 2,
              }}
            />


            <Link href="/verificacion" passHref>
              <Button variant="contained" color="primary" fullWidth>
                Verificar Orden y Datos
              </Button>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </CheckoutNavLayout>
    </>
  );
};

export default CartView;
