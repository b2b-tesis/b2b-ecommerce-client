import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import { Avatar, Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import { format } from "date-fns";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";
import { H5, H6, Paragraph } from "../../../common/components/Typography";
import OrderRow from "./components/OrderRow";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import OrderStatus from "./components/OrderStatus";
import FlexBetween from "../../../common/components/flexbox/FlexBetween";



const OrdersDetailView = () => {
  const productDatabase = [
    {
      price: 250,
      title: "Premium Grocery Collection",
      imgUrl: "/assets/images/products/Groceries/2.PremiumGroceryCollection.png",
      category: "groceries",
      id: "260812489744529",
    },
    {
      price: 250,
      title: "Premium Grocery Pack",
      imgUrl: "/assets/images/products/Groceries/3.PremiumGroceryPack.png",
      category: "groceries",
      id: "703414859860831",
    },
    {
      price: 250,
      title: "Fresh&Real CHole Masala",
      imgUrl: "/assets/images/products/Groceries/4.FreashRealCholeMasala.png",
      category: "groceries",
      id: "39785868816407843",
    },
  ]
  const orderStatus = "shipping";

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={ShoppingBagOutlined}
        title={'Detalle de Orden'}
        navigation={<CustomerDashboardNavigation />}
      />

      <OrderStatus orderStatus={orderStatus}/>

      <Card
        sx={{
          p: 0,
          mb: "30px",
        }}
      >
        <TableRow
          sx={{
            p: "12px",
            borderRadius: 0,
            boxShadow: "none",
            bgcolor: "grey.200",
          }}
        >
          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize={14} color="grey.600" mr={0.5}>
              Order ID:
            </Typography>
            <Typography fontSize={14}>9001997718074513</Typography>
          </FlexBox>

          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize={14} color="grey.600" mr={0.5}>
              Placed on:
            </Typography>
            <Typography fontSize={14}>
              {format(new Date(), "dd MMM, yyyy")}
            </Typography>
          </FlexBox>

          <FlexBox className="pre" m={0.75} alignItems="center">
            <Typography fontSize={14} color="grey.600" mr={0.5}>
              Delivered on:
            </Typography>
            <Typography fontSize={14}>
              {format(new Date(), "dd MMM, yyyy")}
            </Typography>
          </FlexBox>
        </TableRow>

        <Box py={1}>
          {productDatabase.map((item) => (
            <FlexBox
              px={2}
              py={1}
              flexWrap="wrap"
              alignItems="center"
              key={item.id}
            >
              <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                <Avatar
                  src={item.imgUrl}
                  sx={{
                    height: 64,
                    width: 64,
                  }}
                />
                <Box ml={2.5}>
                  <H6 my="0px">{item.title}</H6>
                  <Typography fontSize="14px" color="grey.600">
                    ${item.price} x 1
                  </Typography>
                </Box>
              </FlexBox>

              <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                <Typography fontSize="14px" color="grey.600">
                  Product properties: Black, L
                </Typography>
              </FlexBox>

              <FlexBox flex="160px" m={0.75} alignItems="center">
                <Button variant="text" color="primary">
                  <Typography fontSize="14px">Write a Review</Typography>
                </Button>
              </FlexBox>
            </FlexBox>
          ))}
        </Box>
      </Card>
      
      
      <Grid container spacing={3}>
        <Grid item lg={6} md={6} xs={12}>
          <Card
            sx={{
              p: "20px 30px",
            }}
          >
            <H5 mt={0} mb={2}>
              Shipping Address
            </H5>

            <Paragraph fontSize={14} my={0}>
              Kelly Williams 777 Brockton Avenue, Abington MA 2351
            </Paragraph>
          </Card>
        </Grid>

        <Grid item lg={6} md={6} xs={12}>
          <Card
            sx={{
              p: "20px 30px",
            }}
          >
            <H5 mt={0} mb={2}>
              Total Summary
            </H5>

            <FlexBetween mb={1}>
              <Typography fontSize={14} color="grey.600">
                Subtotal:
              </Typography>
              <H6 my="0px">$335</H6>
            </FlexBetween>

            <FlexBetween mb={1}>
              <Typography fontSize={14} color="grey.600">
                Shipping fee:
              </Typography>
              <H6 my="0px">$10</H6>
            </FlexBetween>

            <FlexBetween mb={1}>
              <Typography fontSize={14} color="grey.600">
                Discount:
              </Typography>
              <H6 my="0px">-$30</H6>
            </FlexBetween>

            <Divider
              sx={{
                mb: 1,
              }}
            />

            <FlexBetween mb={2}>
              <H6 my="0px">Total</H6>
              <H6 my="0px">$315</H6>
            </FlexBetween>

            <Typography fontSize={14}>Paid by Credit/Debit Card</Typography>
          </Card>
        </Grid>
      </Grid>

    </CustomerDashboardLayout>


    </>
  );
};

export default OrdersDetailView;
