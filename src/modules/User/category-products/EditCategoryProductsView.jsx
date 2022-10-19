import Link from "next/link";
import { Box, Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import Card1 from "../../../common/components/Card1";




const EditCategoryProductsView = () => {


  return (
    <>
       <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={PostAddOutlinedIcon}
        title={'Editar Categoría de Productos'}
        navigation={<CustomerDashboardNavigationSales />}
        button={
          <Link href={"/usuario/categorias-productos"} >
            <a>
              <Button
                // onClick={}
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                 Regresar a Categorías
              </Button>
            </a>
          </Link>
        }
      />

      <Card1>

      <form >
        <Box >
          <Grid container >
            <Grid item md={6} xs={12}>
              <TextField
                name="name"
                label="Seudónimo para la dirección"
                placeholder="Ejemplo: Direccion Principal"
                fullWidth
                // onBlur={handleBlur}
                // onChange={handleChange}
                // value={values.name || ""}
                // error={!!touched.name && !!errors.name}
                // helperText={touched.name && errors.name}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <FlexBox
                alignItems="center"
                justifyContent="center"
              >
                  <Button type="submit" variant="contained" color="primary">
                  Guardar Cambios
                  </Button>
              </FlexBox>
               
            </Grid>
          </Grid>
        </Box>


      </form>
      </Card1>


    </CustomerDashboardSalesLayout>
    </>
  );
};


export default EditCategoryProductsView;
