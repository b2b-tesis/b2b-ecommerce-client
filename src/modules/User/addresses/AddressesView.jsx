import Link from "next/link";
import { Delete, Edit, Place } from "@mui/icons-material";
import { Button, IconButton, Typography } from "@mui/material";

import UserDashboardHeader from "../../../common/components/layouts/user-dashboard/UserDashboardHeader";
import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import CustomerDashboardNavigation from "../../../common/components/layouts/user-dashboard/Navigations";
import TableRow from "../../../common/components/TableRow";
import { useDeleteAddress } from "./hooks/useDeteleAddress";
import DialogDeleteElement from "../../../common/components/dialogDeleteElement/DialogDeleteElement";
import NoDataMessage from "../../../common/components/noData-message/NoDataMessage";
import { useAddAddress } from "./hooks/useAddAddress";
import { useState } from "react";

const AddressesView = ({addresses, isFilled}) => {

  const [nameToDelete, setNameToDelete] = useState('');
  const {toggleDialog, openDialog, deleteAddress, setIdToDelete} = useDeleteAddress();
  const {showErrorAddAddress} = useAddAddress();
  let title = 'Mis Direcciones';
  let addressesLength = addresses.length

  return (
    <>
      <CustomerDashboardLayout>
      <UserDashboardHeader
        icon={Place}
        title={title}
        navigation={<CustomerDashboardNavigation />}
        button={
          <Link href={addressesLength === 5 ? {} : "/usuario/direcciones/agregar"} >
            <a>
              <Button
                onClick={(event) => addressesLength === 5 && showErrorAddAddress(event)}
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

     {
      isFilled ? (
        addresses.map((address) => (
          <TableRow
            sx={{
              my: 2,
              padding: "6px 18px",
            }}
            key={address.id}
          >
            <Typography whiteSpace="pre" m={0.75} textAlign="left">
              {address.name}
            </Typography>
  
            <Typography flex="1 1 260px !important" m={0.75} textAlign="left">
              {address.address_line}
            </Typography>
  
            <Typography whiteSpace="pre" m={0.75} textAlign="left">
              {address.phone}
            </Typography>
  
            <Typography whiteSpace="pre" textAlign="center" color="grey.600">
              <Link href={`/usuario/direcciones/${address.id}`} passHref>
                <IconButton>
                  <Edit fontSize="small" color="inherit" />
                </IconButton>
              </Link>
  
              <IconButton onClick={() => {toggleDialog(); setIdToDelete(address.id); setNameToDelete(address.name)}}>
                <Delete fontSize="small" color="inherit" />
              </IconButton>
            </Typography>
          </TableRow>
        ))
      ): (
        <NoDataMessage message={'¡Todavía no tienes direcciones guardadas!'}/>
      )
     }

    </CustomerDashboardLayout>

    <DialogDeleteElement
        openDialog={openDialog}
        handleCloseDialog={toggleDialog}
        title={title}
        element={nameToDelete}
        deleteAction={deleteAddress}
      />
    </>
  );
};


export default AddressesView;
