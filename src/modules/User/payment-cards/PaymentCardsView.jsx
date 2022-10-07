import Link from "next/link";
import { useState } from "react";
import CreditCard from "@mui/icons-material/CreditCard";
import Delete from "@mui/icons-material/Delete";
import {Button, Card, IconButton, Typography} from "@mui/material";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import TableRow from "../../../common/components/TableRow";
import { H5 } from "../../../common/components/Typography";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import DialogDeleteElement from "../../../common/components/dialogDeleteElement/DialogDeleteElement";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import { useDeletePaymentCard } from "./hooks/useDeletePaymentCard";
import { convertCard } from "../../../common/helpers/convertNumberCard";
import NoDataMessage from "../../../common/components/noData-message/NoDataMessage";
import { useAddPaymentMethods } from "./hooks/useAddPaymentMethods";

const PaymentCardsView = ({paymentMethods, isFilled}) => {

  const [nameToDelete, setNameToDelete] = useState('');
  const {toggleDialog, openDialog, deletePaymentCard, setIdToDelete} = useDeletePaymentCard();
  let title = 'Métodos de Pago';
  const {showErrorAddPayment} = useAddPaymentMethods();
  let paymentsLength = paymentMethods.length

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        title={title}
        icon={CreditCard}
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href={paymentsLength === 5 ? {} : "/usuario/tarjetas/agregar"} >
            <a>
              <Button
              onClick={(event) => paymentsLength === 5 && showErrorAddPayment(event)}
                color="primary"
                sx={{
                  bgcolor: "primary.light",
                  px: "2rem",
                }}
              >
                Agregar Tarjeta
              </Button>
            </a>
          </Link>
        }
      />

      {
        isFilled ? (
          paymentMethods.map((item) => (
            <TableRow
              sx={{
                my: "1rem",
                padding: "6px 18px",
              }}
              key={item.id}
            >
              <FlexBox alignItems="center" m={0.75}>
                {/* <Card
                  sx={{
                    width: "42px",
                    height: "28px",
                    mr: "10px",
                    borderRadius: "2px",
                  }}
                >
                  <img
                    src={`/assets/images/payment-methods/${item.payment_method}.svg`}
                    alt={item.payment_method}
                    width="100%"
                  />
                </Card> */}
                <H5 whiteSpace="pre" m={0.75}>
                  {item.name_on_card}
                </H5>
              </FlexBox>
              <Typography whiteSpace="pre" m={0.75}>
                Tarjeta terminada en {convertCard(item.card_number)}
              </Typography>
              <Typography whiteSpace="pre" m={0.75}>
                {item.exp_date}
              </Typography>
    
              <Typography whiteSpace="pre" textAlign="center" color="grey.600">
                <IconButton onClick={() => {toggleDialog(); setIdToDelete(item.id); setNameToDelete(`Tarjeta terminada en ${convertCard(item.card_number)}`)}}>
                  <Delete fontSize="small" color="inherit" />
                </IconButton>
              </Typography>
            </TableRow>
          ))
        ) : (
          <NoDataMessage message={'¡Todavía no tienes tarjetas guardadas!'}/>
        )
      }

    </CustomerDashboardLayout>

      <DialogDeleteElement
          openDialog={openDialog}
          handleCloseDialog={toggleDialog}
          title={title}
          element={nameToDelete}
          deleteAction={deletePaymentCard}
        />
    </>
  );
};


export default PaymentCardsView;
