import Link from "next/link";
import { Avatar, Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardSalesLayout from "../../../common/components/layouts/user-dashboard/sales";
import CustomerDashboardNavigationSales from "../../../common/components/layouts/user-dashboard/NavigationsSales";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import TableRow from "../../../common/components/TableRow";
import { H5, H6, Paragraph } from "../../../common/components/Typography";
import OrderSaleStatus from "./components/OrderStatus";
import { convertToDate } from "../../../common/helpers/convertToDate";
import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import { useAcceptOrder } from "./hooks/useAcceptOrder";
import DialogDeleteProduct from "../../../common/components/dialogDeleteElement/DialogDeleteProduct";
import ModalEditProduct from "./components/ModalEditProduct";
import ButtonUpdateOrder from "./components/ButtonUpdateOrder";
import BackDrop from "../../../common/components/backDrop/BackDrop";
import { useShipOrder } from "./hooks/useShipOrder";
import ButtonUploadPDF from "./components/ButtonUploadPDF";


const OrderSaleDetailView = ({order}) => {
  const {status, delivery_address, payment_details, created_at} = order;
  const { toggleDialog, openDialog, deleteProductFromOrder, setIdToDelete, orderItems, total, setProductEdit, toggleModal, openModal, acceptOrder, loading} = useAcceptOrder(order);
  const {updateStatusShipped} = useShipOrder();

  return (
    
    <>
      <CustomerDashboardSalesLayout>
      <UserDashboardHeader
        icon={ListAltOutlinedIcon}
        title={'Detalle de Orden de Venta'}
        navigation={<CustomerDashboardNavigationSales />}
      />
      <OrderSaleStatus orderStatus={status}/>

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
          <FlexBox className="pre" m={0.75} alignItems="center" justifyContent="space-between">
            <FlexBox>
            <Typography fontSize={14} color="grey.600" mr={0.5}>
              Orden creada el :
            </Typography>
            <Typography fontSize={14}>
              {convertToDate(created_at)}
            </Typography>
            </FlexBox>

            {status === 'created' && <ButtonUpdateOrder updateState={acceptOrder} text='Aceptar Orden'/>}
            {status === 'pending' &&
             <FlexBox gap={2}>
              <ButtonUpdateOrder updateState={updateStatusShipped} text= 'Orden Enviada'/>
              <ButtonUploadPDF />
           </FlexBox>
             }
          </FlexBox>
        </TableRow>

        <Box py={1}>
          {orderItems?.map((item) => (
            <FlexBox
              px={2}
              py={1}
              flexWrap="wrap"
              alignItems="center"
              key={item.product.id}
            >
              <FlexBox flex="2 2 260px" m={0.75} alignItems="center">
                <Avatar
                  src={`${process.env.NEXT_PUBLIC_API_URL}/storage/picture/product?filename=${item.product.picture}`}
                  sx={{
                    height: 64,
                    width: 64,
                  }}
                />
                <Box ml={2.5}>
                  <H6 my="0px">{item.product.name}</H6>
                  <Typography fontSize="14px" color="grey.600">
                  S/.{item.product.price} x {item.amount}
                  </Typography>
                </Box>
              </FlexBox>

             {status === 'created' ? 
             <>
                <FlexBox flex="160px" m={0.75} alignItems="center">
               <Button variant="text" color="secondary" onClick={() => {toggleModal(); setProductEdit(item.product.id)}}>
                 <Typography fontSize="14px">Editar cantidad del Producto en la orden</Typography>
               </Button>
             </FlexBox>

             <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                 <Button variant="text" color="primary"  onClick={() => {toggleDialog(); setIdToDelete(item.product.id)}}>
                     <Typography fontSize="14px">Eliminar Producto de la Orden</Typography>
                 </Button>
             </FlexBox>
             </>
            : (
              <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
              <Link href={`/usuario/productos/${item.product.id}`} passHref>
                <Button variant="text" color="primary">
                    <Typography fontSize="14px">Ver Información del Producto</Typography>
                </Button>
              </Link>
            </FlexBox>
            )
             }

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
              Dirección a enviar y teléfono
            </H5>

            <Paragraph fontSize={14} my={0}>
            {delivery_address.address}
            </Paragraph>
            <Paragraph fontSize={14} my={0}>
            {delivery_address.phone}
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
              Resumen de Orden
            </H5>

            <FlexBetween mb={1}>
              <Typography fontSize={14} color="grey.600">
                Subtotal:
              </Typography>
              <H6 my="0px">S/.{total}</H6>
            </FlexBetween>

            <Divider
              sx={{
                mb: 1,
              }}
            />

            <FlexBetween mb={2}>
              <H6 my="0px">Total</H6>
              <H6 my="0px">S/.{total}</H6>
            </FlexBetween>

            <Typography fontSize={14}>{status === 'created' || status === 'accepted' || status === 'cancelled' ? null : 'Pagado con una tarjeta de crédito/débito'}</Typography>
          </Card>
        </Grid>
      </Grid>

   
      <BackDrop loading2={loading} message={'Estamos actualizando el estado de la orden'}/>

    </CustomerDashboardSalesLayout>

    <ModalEditProduct
      openDialog={openModal}
      handleCloseDialog={toggleModal}
    />


    <DialogDeleteProduct
        openDialog={openDialog}
        handleCloseDialog={toggleDialog}
        deleteAction={deleteProductFromOrder}
      />



    </>
  );
};


export default OrderSaleDetailView;
