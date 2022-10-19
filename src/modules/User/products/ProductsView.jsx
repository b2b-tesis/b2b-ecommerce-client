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


const ProductsView = () => {

  const {tableHeading} = useListProducts();

  const products = [
    {
      price: 250,
      published: true,
      id: "6ed34Edf65d",
      category: "Gadgets",
      name: "Samsung Galaxy-M1",
      brand: "/assets/images/brands/samsung.png",
      image: "/assets/images/products/samsung.png",
    },
    {
      price: 10,
      published: true,
      id: "6ed34Edf65d",
      category: "Grocery",
      name: "Tomatto",
      brand: "/assets/images/brands/brokshire.png",
      image: "/assets/images/products/tomato.png",
    },
    {
      price: 24,
      published: false,
      id: "6ed34Edf65d",
      category: "Beauty",
      name: "Boston Round Cream Pack",
      brand: "/assets/images/brands/levis.png",
      image: "/assets/images/products/beauty-cream.png",
    },
    {
      price: 35,
      published: true,
      id: "6ed34Edf65d",
      category: "Fashion",
      name: "Woman Party Dress",
      brand: "/assets/images/brands/raymond.png",
      image: "/assets/images/products/red-dress.png",
    },
    {
      price: 16,
      published: true,
      id: "6ed34Edf65d",
      category: "Fashion",
      name: "White Tops",
      brand: "/assets/images/brands/raymond.png",
      image: "/assets/images/products/white-tops.png",
    },
    {
      price: 26,
      published: false,
      id: "6ed34Edf65d",
      category: "Fashion",
      name: "Casual Shirt for Man",
      brand: "/assets/images/brands/raymond.png",
      image: "/assets/images/products/formal-shirt.png",
    },
    {
      price: 21,
      published: true,
      id: "6ed34Edf65d",
      category: "Fashion",
      name: "Blue Premium T-shirt",
      brand: "/assets/images/brands/raymond.png",
      image: "/assets/images/products/blu-tshirt.png",
    },
    {
      price: 12,
      published: false,
      id: "6ed34Edf65d",
      category: "Fashion",
      name: "Man Trowzer Pant",
      brand: "/assets/images/brands/raymond.png",
      image: "/assets/images/products/pnat.png",
    },
    {
      price: 250,
      published: true,
      id: "6ed34Edf65d",
      category: "Gadgets",
      name: "Samsung Galaxy-M1",
      brand: "/assets/images/brands/samsung.png",
      image: "/assets/images/products/samsung.png",
    },
    {
      price: 10,
      published: true,
      id: "6ed34Edf65d",
      category: "Grocery",
      name: "Tomatto",
      brand: "/assets/images/brands/brokshire.png",
      image: "/assets/images/products/tomato.png",
    }
  ];

  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort,
  } = useMuiTable({
    listData: products,
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
                rowCount={products.length}
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
            onChange={handleChangePage}
            count={10}
          />
        </Stack>
      </Card>


    </CustomerDashboardSalesLayout>


    </>
  );
};


export default ProductsView;
