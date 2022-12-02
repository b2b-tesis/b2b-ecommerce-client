import { Grid } from "@mui/material";
import CheckoutNavLayout from "../../common/components/layouts/checkout/CheckoutNavLayout";
import CheckoutForm from "./components/CheckoutForm";
import CheckoutSummary from "./components/CheckoutSummary";


const CheckoutView = ({userAddresses, userPayment}) => {

  return (
    <>
      <CheckoutNavLayout>
      <Grid container spacing={3}>
          <Grid item lg={8} md={8} xs={12}>
            <CheckoutForm userAddresses={userAddresses} userPayment={userPayment}/>
          </Grid>

          <Grid item lg={4} md={4} xs={12}>
            <CheckoutSummary />
          </Grid>
      </Grid>
    </CheckoutNavLayout>
    </>
  );
};

export default CheckoutView;
