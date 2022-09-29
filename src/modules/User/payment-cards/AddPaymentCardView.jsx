import Link from "next/link";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as yup from "yup";
import CreditCard from "@mui/icons-material/CreditCard";
import { Box, Button, Grid, TextField } from "@mui/material";

import Card1 from "../../../common/components/Card1";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";


const AddPaymentCardView = () => {
  const {
    query: { id },
  } = useRouter();

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  return (
    <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={CreditCard}
        title={`${id === "agregar" ? "Agregar" : "Editar"} Método de Pago`}
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
        <Formik
          initialValues={initialValues}
          validationSchema={checkoutSchema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={4}>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="card_no"
                      label="Card Number"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.card_no || ""}
                      error={!!touched.card_no && !!errors.card_no}
                      helperText={touched.card_no && errors.card_no}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="name"
                      label="Name on Card"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name || ""}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="exp"
                      label="Exp. Date"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.exp || ""}
                      error={!!touched.exp && !!errors.exp}
                      helperText={touched.exp && errors.exp}
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
          )}
        </Formik>
      </Card1>
    </CustomerDashboardLayout>
  );
};

const initialValues = {
  card_no: "",
  name: "",
  exp: "",
  cvc: "",
};
const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  card_no: yup.string().required("required"),
  exp: yup.string().required("required"),
  cvc: yup.string().required("required"),
});
export default AddPaymentCardView;
