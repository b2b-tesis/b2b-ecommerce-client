import Link from "next/link";
import { Delete, Edit, Place } from "@mui/icons-material";
import { Button, IconButton, Pagination, Typography } from "@mui/material";

import FlexBox from "../../../common/components/flexbox/FlexBox";
import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";

const AddressesView = () => {

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Place}
        title="Mis Direcciones"
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href="/usuario/direcciones/agregar">
            <a>
              <Button
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                 Agregar Nueva Dirección
              </Button>
            </a>
          </Link>
        }
      />

      {orderList.map((_, ind) => (
        <TableRow
          sx={{
            my: 2,
            padding: "6px 18px",
          }}
          key={ind}
        >
          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            Ralf Edward
          </Typography>

          <Typography flex="1 1 260px !important" m={0.75} textAlign="left">
            777 Brockton Avenue, Abington MA 2351
          </Typography>

          <Typography whiteSpace="pre" m={0.75} textAlign="left">
            +1927987987498
          </Typography>

          <Typography whiteSpace="pre" textAlign="center" color="grey.600">
            <Link href="/usuario/direcciones/jkhqwekjh" passHref>
              <IconButton>
                <Edit fontSize="small" color="inherit" />
              </IconButton>
            </Link>

            <IconButton onClick={(e) => e.stopPropagation()}>
              <Delete fontSize="small" color="inherit" />
            </IconButton>
          </Typography>
        </TableRow>
      ))}

      <FlexBox justifyContent="center" mt={5}>
        <Pagination count={5} onChange={(data) => console.log(data)} />
      </FlexBox>
    </CustomerDashboardLayout>
    </>
  );
};

const orderList = [
  {
    orderNo: "1050017AS",
    status: "Pending",
    purchaseDate: new Date(),
    price: 350,
  },
  {
    orderNo: "1050017AS",
    status: "Processing",
    purchaseDate: new Date(),
    price: 500,
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
  },
  {
    orderNo: "1050017AS",
    status: "Delivered",
    purchaseDate: "2020/12/23",
    price: 700,
  },
  {
    orderNo: "1050017AS",
    status: "Cancelled",
    purchaseDate: "2020/12/15",
    price: 300,
  },
];

export default AddressesView;
