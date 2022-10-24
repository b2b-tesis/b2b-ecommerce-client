import Link from "next/link";
import { Box, Button, Grid, IconButton, Pagination, Typography } from "@mui/material";
import PostAddOutlinedIcon from '@mui/icons-material/PostAddOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { Small } from "../../../common/components/Typography";
import TableRow from "../../../common/components/TableRow";
import { RemoveRedEye, Edit } from "@mui/icons-material";
import { useListCategoryProducts } from "./hooks/useListCategoryProducts";
import NoDataMessage from "../../../common/components/noData-message/NoDataMessage";
import Loading from "../../../common/components/loadingView/Loading";


const CategoryProductsView = () => {

  const {categoryProductsResult, totalPages, handleCurrentlyPage, page, totalLength, loading} = useListCategoryProducts();
  
  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={PostAddOutlinedIcon}
        title={'Categoría de Productos'}
        navigation={<CustomerDashboardNavigationSales />}
        button={
          <Link href={"/usuario/categorias-productos/agregar"} >
            <a>
              <Button
                // onClick={}
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                 Agregar Nueva Categoría
              </Button>
            </a>
          </Link>
        }
      />

    {loading
      ? (<Loading/>)
      : (
        
        totalLength >= 1 ? (
          <>
             {
               categoryProductsResult?.results?.map(item =>(
            <>
                  <TableRow
                  key={item.id}
                  sx={{
                    p: "0.75rem 1.5rem",
                  }}
                   >
                    <FlexBox flexDirection="column" p={1}>
                      <Small color="grey.600" mb={0.5} textAlign="left">
                        Nombre de Categoría
                      </Small>
                      <span>{item.name}</span>
                    </FlexBox>
              
                    <FlexBox flexDirection="column" p={1}>
                      <Small color="grey.600" mb={0.5} textAlign="left">
                        Total de Productos en la Categoría
                      </Small>
                      <span>{item.total_products}</span>
                    </FlexBox>
              
                    <FlexBox flexDirection="column" p={1} alignItems="center">
                      <Small color="grey.600" mb={0.5} textAlign="left">
                        Acciones
                      </Small>
                      <Typography whiteSpace="pre" textAlign="center" color="grey.600">
                          <Link href={`/usuario/categorias-productos/${item.id}`} passHref>
                            <IconButton>
                              <Edit fontSize="small" color="inherit" />
                            </IconButton>
                          </Link>
              
                          <IconButton>
                            <RemoveRedEye fontSize="small" color="inherit" />
                          </IconButton>
                        </Typography>
                    </FlexBox>
            
                </TableRow>
            
        
             <Box marginTop={3} >
            </Box> 
            </>
             
            ))
          }
          
              <FlexBox flexDirection="row" justifyContent="center" mt={5}>
                <Pagination count={totalPages} variant="outlined" color="primary" onChange={(e) => handleCurrentlyPage(e.target.textContent)} page={page} hidePrevButton hideNextButton/>
              </FlexBox>
         </>
    
        
      ) : (<NoDataMessage message={'¡Todavía no tienes categorías guardadas para tus productos !'}/>)
      
      )
    }

    </CustomerDashboardSalesLayout>


    </>
  );
};


export default CategoryProductsView;
