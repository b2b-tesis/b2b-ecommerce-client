import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";
import { H5, H6, Paragraph } from "../../../common/components/Typography";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import OrderStatus from "./components/OrderStatus";
import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import { convertCard } from "../../../common/helpers/convertNumberCard";
import { convertToDate } from "../../../common/helpers/convertToDate";
import ButtonUpdateState from "./components/ButtonUpdateState";
import { usePayOrder } from "./hooks/usePayOrder";
import ModalEditAddress from "./components/ModalEditAddress";
import ModalEditPayment from "./components/ModalEditPayment";
import BackDrop from "../../../common/components/backDrop/BackDrop";
import { useDeliveredOrder } from "./hooks/useDeliveredOrder";
import { useDownloadPdf } from "./hooks/useDownloadPdf";
import { useRefundOrder } from "./hooks/useRefundOrder";
import ModalRefundOrder from "./components/ModalRefundOrder";
import ModalPayOrder from "./components/ModalPayOrder";
import OrderStatusRefund from "./components/OrderStatusRefund";

const OrdersDetailView = ({ order }) => {
  const {
    items,
    status,
    delivery_address,
    total,
    sub_total,
    payment_details,
    created_at,
    have_file,
  } = order;

  const {
    openAddressModal,
    toggleAddressModal,
    openPaymentModal,
    togglePaymentModal,
    updateStatusCancelled,
    loading,
    updateStatusPending,
    openAcceptPayModal, toggleAcceptPayModal
  } = usePayOrder();
  const { updateStatusDelivered } = useDeliveredOrder();
  const { downloadPdf } = useDownloadPdf();
  const {updateRefundOrder, openRefundModal, toggleRefundModal} = useRefundOrder();

  return (
    <>
      <CustomerDashboardLayout>
        <UserDashboardHeader
          icon={ShoppingBagOutlined}
          title={"Detalle de Orden de Compra"}
          navigation={<CustomerDashboardNavigation />}
        />

        {
         status === 'created' || status === 'accepted' || status === 'pending' || status === 'shipped' || status === 'delivered' || status === 'cancelled' ?
          <OrderStatus orderStatus={status} />
          : <OrderStatusRefund orderStatus={status} /> 
        }

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
            <FlexBox
              className="pre"
              m={0.75}
              alignItems="center"
              justifyContent="space-between"
            >
              <FlexBox>
                <Typography fontSize={14} color="grey.600" mr={0.5}>
                  Orden creada el :
                </Typography>
                <Typography fontSize={14}>
                  {convertToDate(created_at)}
                </Typography>
              </FlexBox>

              {status === "accepted" && (
                <FlexBox gap={2}>
                  <ButtonUpdateState
                    text={"Cancelar Orden"}
                    updateState={updateStatusCancelled}
                  />
                  <ButtonUpdateState
                    text={"Aceptar y Pagar Orden"}
                    updateState={toggleAcceptPayModal}
                    color={"secondary"}
                  />
                </FlexBox>
              )}
              {status === "shipped" && (
                <FlexBox gap={2}>
                  <ButtonUpdateState
                    text={"Recibí el Pedido Satisfactoriamente"}
                    updateState={updateStatusDelivered}
                  />
                  <ButtonUpdateState
                    text={"Descargar Boleta/Factura de Compra"}
                    updateState={downloadPdf}
                    color={"secondary"}
                  />
                </FlexBox>
              )}

              {status === "delivered" && (
                <FlexBox gap={2}>
                  <ButtonUpdateState
                    text={"Solicitar reembolso"}
                    updateState={toggleRefundModal}
                  />
                  <ButtonUpdateState
                    text={"Descargar Boleta/Factura de Compra"}
                    updateState={downloadPdf}
                    color={"secondary"}
                  />
                </FlexBox>
              )}
            </FlexBox>
          </TableRow>

          <Box py={1}>
            {items?.map((item) => (
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

                <FlexBox flex="1 1 260px" m={0.75} alignItems="center">
                  <Link href={`/producto/${item.product.id}`} passHref>
                    <Button variant="text" color="primary">
                      <Typography fontSize="14px">
                        Ver Información del Producto
                      </Typography>
                    </Button>
                  </Link>
                </FlexBox>

                <FlexBox flex="160px" m={0.75} alignItems="center">
                  <Button variant="text" color="secondary">
                    <Typography fontSize="14px">Dejar una reseña</Typography>
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
                Dirección a enviar y teléfono
              </H5>
              <Paragraph fontSize={14} my={0}>
                {delivery_address.address}
              </Paragraph>
              <Paragraph fontSize={14} my={0}>
                {delivery_address.phone}
              </Paragraph>
              {status === "accepted" && (
                <Grid item py={2}>
                  <ButtonUpdateState
                    text={"Editar Dirección"}
                    updateState={toggleAddressModal}
                  />
                </Grid>
              )}
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
                <H6 my="0px">S/.{sub_total}</H6>
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

              <Typography fontSize={14}>
                {status === "created" ||
                status === "accepted" ||
                status === "cancelled"
                  ? `A pagar con una tarjeta terminada en  ${convertCard(
                      payment_details.card_number
                    )}`
                  : "Pagado con una tarjeta de crédito/débito"}
              </Typography>

              {status === "accepted" && (
                <Grid item py={2}>
                  <ButtonUpdateState
                    text={"Editar Método de Pago"}
                    updateState={togglePaymentModal}
                  />
                </Grid>
              )}
            </Card>
          </Grid>
        </Grid>

        <BackDrop
          loading2={loading}
          message={"Estamos actualizando el estado de la orden"}
        />
      </CustomerDashboardLayout>

      <ModalEditAddress
        openDialog={openAddressModal}
        handleCloseDialog={toggleAddressModal}
        paymentDetails={payment_details}
      />

      <ModalEditPayment
        openDialog={openPaymentModal}
        handleCloseDialog={togglePaymentModal}
        addressDetails={delivery_address}
      />

      <ModalPayOrder
      openDialog={openAcceptPayModal}
      handleCloseDialog={toggleAcceptPayModal}
      acceptOrder={updateStatusPending}
      />

      <ModalRefundOrder
      openDialog={openRefundModal}
      handleCloseDialog={toggleRefundModal}
      refundOrder={updateRefundOrder}
      />
    </>
  );
};

export default OrdersDetailView;
