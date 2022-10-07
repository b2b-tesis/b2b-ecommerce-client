import Link from "next/link";
import Place from "@mui/icons-material/CreditCard";
import { Box, Button, Grid, TextField } from "@mui/material";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import Card1 from "../../../common/components/Card1";
import {useEditAddress} from "./hooks/useEditAddress";


const EditAddressesView = ({address}) => {

  const {initialValues, values, errors, touched, handleBlur, handleChange, handleSubmit, loading} = useEditAddress();

  initialValues.name = address.name;
  initialValues.address_line = address.address_line;
  initialValues.phone = address.phone;

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Place}
        title={"Editar Dirección"}
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/usuario/direcciones" passHref>
            <Button
              color="primary"
              sx={{
                bgcolor: "primary.light",
                px: "2rem",
              }}
            >
              Regresar a Direcciones
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
                      name="name"
                      label="Seudónimo para la dirección"
                      placeholder="Ejemplo: Direccion Principal"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                      error={!!touched.name && !!errors.name}
                      helperText={touched.name && errors.name}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      name="address_line"
                      label="Dirección"
                      placeholder="Ejemplo: Avenida SiempreViva 123"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address_line}
                      error={!!touched.address_line && !!errors.address_line}
                      helperText={touched.address_line && errors.address_line}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      type="number"
                      name="phone"
                      label="Teléfono para la dirección"
                      placeholder="Puede colocar el mismo teléfono de su cuenta"
                      fullWidth
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone}
                      error={!!touched.phone && !!errors.phone}
                      helperText={touched.phone && errors.phone}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Button type="submit" variant="contained" color="primary" disabled={loading ? true : false}>
               {
                loading ? 'Cargando...' : ' Guardar Cambios'
               }
              </Button>
            </form>
      </Card1>
    </CustomerDashboardLayout>
    </>
  );
};


export default EditAddressesView;
