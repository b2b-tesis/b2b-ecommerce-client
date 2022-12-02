import Link from "next/link";
import { Box, Button, Card, Checkbox, Grid, MenuItem, Typography} from "@mui/material";

import Card1 from "../../../common/components/Card1";
import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import { H6, Paragraph } from "../../../common/components/Typography";
import { Heading } from "./Heading";
import { convertCard, getTypeCard } from "../../../common/helpers/convertNumberCard";
import LazyImage from "../../../common/components/LazyImage";
import { useSaveOrder } from "../hooks/useSaveOrder";
import BackDrop from "../../../common/components/backDrop/BackDrop";


const CheckoutForm = ({userAddresses, userPayment}) => {

  const {address, setAddress, payment, setPayment, saveOrder, loading} = useSaveOrder();

  return (

 <>
    
    <Card1
            sx={{
              mb: 3,
            }}
          >
            <FlexBetween>
              <Heading number={1} title="Dirección de Entrega" />
              <Link href="/usuario/direcciones/agregar">
                <a>
                <Button color="primary" variant="outlined" sx={{p: "2px 20px"}}>
                  Agregar Dirección
                </Button>
                </a>
              </Link>

            </FlexBetween>

            <Typography mb={1.5}>Seleccione la dirección donde se enviará su pedido</Typography>
            <Grid container spacing={3}>
              {userAddresses?.map((item) => (
                <Grid item md={4} sm={6} xs={12} key={item.id}>
                  <Card
                    sx={{
                      padding: 2,
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid",
                      position: "relative",
                      backgroundColor: "grey.100",
                      borderColor:
                        item?.id === address?.id
                          ? "primary.main"
                          : "transparent",
                    }}
                    onClick={() => setAddress(item)}
                  >

                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.address_line}</Paragraph>
                    <Paragraph color="grey.700">{item.phone}</Paragraph>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Card1>

          <Card1
            sx={{
              mb: 3,
            }}
          >
            <FlexBetween>
            <Heading number={3} title="Tarjeta de Pago" />
              <Link href="/usuario/tarjetas/agregar">
                <a>
                <Button color="primary" variant="outlined" sx={{p: "2px 20px"}}>
                  Agregar Tarjeta
                </Button>
                </a>
              </Link>
            </FlexBetween>

              <Typography mb={1.5}>Selecciona la tarjeta para realizar el posterior pago</Typography>
            <Box>
              <Grid container spacing={3}>
                {userPayment?.map((item) => (
                  <Grid item md={4} sm={6} xs={12} key={item.id}>
                    <Card
                      sx={{
                        padding: 2,
                        boxShadow: "none",
                        cursor: "pointer",
                        border: "1px solid",
                        backgroundColor: "grey.100",
                        borderColor:
                          item?.id === payment?.id
                            ? "primary.main"
                            : "transparent",
                      }}
                      onClick={() => setPayment(item)}
                    >
                      <Box height={24} width={36} position="relative" mb={1}>
                        <LazyImage
                          layout="fill"
                          objectFit="contain"
                          src={`/assets/images/payment-methods/${getTypeCard(item.card_number)}.svg`}
                        />
                      </Box>

                      <Paragraph color="grey.700">
                        **** **** **** {convertCard(item.card_number)}
                      </Paragraph>
                      <Paragraph color="grey.700">{item.name_on_card}</Paragraph>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

              

              <Button fullWidth type="submit" color="primary" variant="contained" sx={{mt: 3}} onClick={saveOrder}>
                Guardar Orden
              </Button>

          
          </Card1>

          <BackDrop loading2={loading} message={'Estamos guardando la orden'}/>
 </>

  );
};

export default CheckoutForm;
