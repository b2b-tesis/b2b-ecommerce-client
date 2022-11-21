import Link from "next/link";
import { useRouter } from "next/router";
import {Avatar, Box, Button, Card, Checkbox, Grid, MenuItem, Typography} from "@mui/material";

import Card1 from "../../../common/components/Card1";
import FlexBetween from "../../../common/components/flexbox/FlexBetween";
import FlexBox from "../../../common/components/flexbox/FlexBox";
import { H6, Paragraph } from "../../../common/components/Typography";

const Heading = ({ number, title }) => {
  return (
    <FlexBox gap={1.5} alignItems="center" mb={3.5}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          color: "primary.text",
          backgroundColor: "primary.main",
        }}
      >
        {number}
      </Avatar>
      <Typography fontSize="20px">{title}</Typography>
    </FlexBox>
  );
};

const CheckoutForm = () => {
  const router = useRouter();

  const handleFormSubmit = async (values) => {
    router.push("/payment");
  };

  const handleFieldValueChange = (value, fieldName, setFieldValue) => () => {
    setFieldValue(fieldName, value);
  };


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
              {addressList2.map((item, ind) => (
                <Grid item md={4} sm={6} xs={12} key={ind}>
                  <Card
                    sx={{
                      padding: 2,
                      boxShadow: "none",
                      cursor: "pointer",
                      border: "1px solid",
                      position: "relative",
                      backgroundColor: "grey.100",
                      // borderColor:
                      //   item.street1 === values.address
                      //     ? "primary.main"
                      //     : "transparent",
                    }}
                    onClick={handleFieldValueChange(
                      item.street1,
                      "address",
                      // setFieldValue
                    )}
                  >

                    <H6 mb={0.5}>{item.name}</H6>
                    <Paragraph color="grey.700">{item.street1}</Paragraph>
                    {item.street2 && (
                      <Paragraph color="grey.700">{item.address2}</Paragraph>
                    )}
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
                {paymentMethodList.map((item) => (
                  <Grid item md={4} sm={6} xs={12} key={item.last4Digits}>
                    <Card
                      sx={{
                        padding: 2,
                        boxShadow: "none",
                        cursor: "pointer",
                        border: "1px solid",
                        backgroundColor: "grey.100",
                        // borderColor:
                        //   item.last4Digits === values.card
                        //     ? "primary.main"
                        //     : "transparent",
                      }}
                      onClick={handleFieldValueChange(
                        item.last4Digits,
                        "card",
                        // setFieldValue
                      )}
                    >
                      {/* <Box height={24} width={36} position="relative" mb={1}>
                        <LazyImage
                          layout="fill"
                          objectFit="contain"
                          src={`/assets/images/payment-methods/${item.cardType}.svg`}
                        />
                      </Box> */}

                      <Paragraph color="grey.700">
                        **** **** **** {item.last4Digits}
                      </Paragraph>
                      <Paragraph color="grey.700">{item.name}</Paragraph>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

              
            <Link href="/usuario/ordenes/123" passHref>
              <Button fullWidth type="submit" color="primary" variant="contained" sx={{mt: 3}}>
                Guardar Orden
              </Button>
            </Link>

          
          </Card1>
 </>

  );
};

const addressList2 = [
  {
    name: "Home",
    phone: "+17804084466",
    street2: "435 Bristol, MA 2351",
    street1: "375 Subidbazaar, MA 2351",
  },
  {
    name: "Office",
    phone: "+18334271710",
    street2: "968 Brockton, MA 2351",
    street1: "645 Bondorbazaar, MA 2351",
  },
  {
    name: "Office 2",
    phone: "+17754739407",
    street2: "777 Kazi, MA 2351",
    street1: "324 Ambarkhana, MA 2351",
  },
];
const paymentMethodList = [
  {
    cardType: "Amex",
    last4Digits: "4765",
    name: "Jaslynn Land",
  },
  {
    cardType: "Mastercard",
    last4Digits: "5432",
    name: "Jaslynn Land",
  },
  {
    cardType: "Visa",
    last4Digits: "4543",
    name: "Jaslynn Land",
  },
];


export default CheckoutForm;
