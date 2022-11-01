import Link from "next/link";
import { Button, Card, Stack, Table, TableBody, TableContainer, Typography } from "@mui/material";
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import Scrollbar from "../../../common/components/Scrollbar";
import TableHeader from "../../../common/components/data-table/TableHeader";
import ProductRow from "../../../common/components/data-table/products/ProductRow";
import useMuiTable from "../../../common/hooks/useMuiTable";
import TablePagination from "../../../common/components/data-table/TablePagination";
import { useListProducts } from "./hooks/useListProducts";
import Loading from "../../../common/components/loadingView/Loading";



const ProductsView = () => {

  const {tableHeading, productsResult, totalPages, handleCurrentlyPage, page, totalLength, loading3} = useListProducts();
  
  const {
    order,
    orderBy,
    selected,
    filteredList,
    handleRequestSort,
  } = useMuiTable({
    listData: productsResult?.results,
  });
  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={InventoryOutlinedIcon}
        title={'Mis Productos'}
        navigation={<CustomerDashboardNavigationSales />}
        button={
          <Link href={"/usuario/productos/agregar"} >
            <a>
              <Button
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                 Agregar Nuevo Producto
              </Button>
            </a>
          </Link>
        }
      />

{loading3 ?(
  <Loading/>
      
) :(
  totalLength >= 1 ? 
  (
    <Card>
      <Scrollbar>
        <TableContainer
          sx={{
            minWidth: 900,
          }}
        >
          <Table>
            <TableHeader
              order={order}
              hideSelectBtn
              orderBy={orderBy}
              heading={tableHeading}
              rowCount={productsResult?.results?.length}
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
            />

            <TableBody>
              {filteredList.map((product, index) => (
                <ProductRow product={product} key={index} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Scrollbar>

      <Stack alignItems="center" my={4}>
        <TablePagination
          count={totalPages}
          onChange={(e) => handleCurrentlyPage(e.target.textContent)}
          page={page} 
          hidePrevButton
          hideNextButton
        />
      </Stack>
    </Card>
  ) : (null)
)}


    </CustomerDashboardSalesLayout>


    </>
  );
};


export default ProductsView;
