import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";
import CreditCard from "@mui/icons-material/CreditCard";
import { Box, Button, Grid, TextField } from "@mui/material";

import Card1 from "../../../common/components/Card1";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import {useAddPaymentMethods} from './hooks/useAddPaymentMethods';

const AddPaymentCardView = () => {

  const {values, errors, touched, handleBlur, handleChange, handleSubmit, loading} = useAddPaymentMethods();
  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={CreditCard}
        title={'Agregar Tarjeta de Pago'}
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/usuario/tarjetas" passHref>
            <Button
              color="primary"
              sx={{
                bgcolor: "primary.light",
                px: "2rem",
              }}
            >
              Regresar a Métodos de Pago
            </Button>
          </Link>
        }
      />

      <Card1>

            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="card_number"
                      label="Card Number"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.card_number || ""}
                      error={!!touched.card_number && !!errors.card_number}
                      helperText={touched.card_number && errors.card_number}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="name_on_card"
                      label="Name on Card"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name_on_card || ""}
                      error={!!touched.name_on_card && !!errors.name_on_card}
                      helperText={touched.name_on_card && errors.name_on_card}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="exp_date"
                      label="Exp. Date"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.exp_date || ""}
                      error={!!touched.exp_date && !!errors.exp_date}
                      helperText={touched.exp_date && errors.exp_date}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="cvc"
                      label="CVC"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.cvc || ""}
                      error={!!touched.cvc && !!errors.cvc}
                      helperText={touched.cvc && errors.cvc}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Guardar Cambios
              </Button>
            </form>
      </Card1>
    </CustomerDashboardLayout>
  );
};


export default AddPaymentCardView;
