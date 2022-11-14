import { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import Stepper from "./Stepper";


const CheckoutNavLayout = ({ children }) => {
  const [selectedStep, setSelectedStep] = useState(0);
  const router = useRouter();
  const { pathname } = router;

  const handleStepChange = (step) => {
    switch (step) {
      case 0:
        router.push("/carrito");
        break;

      case 1:
        router.push("/verificacion");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/carrito":
        setSelectedStep(1);
        break;

      case "/verificacion":
        setSelectedStep(2);
        break;


      default:
        break;
    }
  }, [pathname]);
  return (

      <Container
        sx={{
          my: 4,
        }}
      >
        <Box
          mb={3}
          display={{
            sm: "block",
            xs: "none",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stepper
                stepperList={stepperList}
                selectedStep={selectedStep}
                onChange={handleStepChange}
              />
            </Grid>
          </Grid>
        </Box>

        {children}
      </Container>

  );
};

const stepperList = [
  {
    title: "Carrito",
    disabled: false,
  },
  {
    title: "Verificación",
    disabled: false,
  }
];
export default CheckoutNavLayout;
