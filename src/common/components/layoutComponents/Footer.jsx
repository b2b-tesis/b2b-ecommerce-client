import Link from "next/link";
import { Box, Container, Grid, styled } from "@mui/material";

import Image from "../BazaarImage";
import { Paragraph } from "../Typography";

const StyledLink = styled("a")(({ theme }) => ({
  textDecoration:"none",
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": {
    color: theme.palette.grey[100],
  },
}));

const Footer = () => {
  return (
    <footer>
      <Box bgcolor="#222935">
        <Container
          sx={{
            p: "1rem",
            color: "white",
          }}
        >
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Link href="/">
                  <a>
                    <Image mb={2.5} src="/assets/images/logo.svg" alt="logo" />
                  </a>
                </Link>

                <Paragraph mb={2.5} color="grey.500">
                Marketplace B2B para comprar y vender productos en general, centrado en MYPES de la ciudad de Tacna.
                </Paragraph>

              </Grid>

              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Políticas de Uso
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <Link href={item.href} key={ind} passHref>
                      <StyledLink>{item.text}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Manuales de Uso
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <Link href={item.href} key={ind} passHref>
                      <StyledLink>{item.text}</StyledLink>
                    </Link>
                  ))}
                </div>
              </Grid>

              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  Contáctanos
                </Box>
                <Box py={0.6} color="grey.500">
                  Email: soporteb2b@gmail.com
                </Box>
                <Box py={0.6} mb={2} color="grey.500">
                  Phone: +51 952289457
                </Box>

              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

const aboutLinks = [
  {
    text:"Política de Privacidad",
    href:'/politicas/privacidad'
  },
  {
    text:"Política de Reembolso",
    href:'/politicas/reembolso'
  },
  {
    text:"Política de Delivery",
    href:'/politicas/delivery'
  },
  {
    text:"Términos y Condiciones",
    href:'/'
  }
];
const customerCareLinks = [
  {
    text:"¿Cómo comprar?",
    href:'/'
  },
  {
    text:"¿Cómo vender?",
    href:'/'
  },
  {
    text:"¿Cómo solicitar devoluciones y reembolsos?",
    href:'/'
  }
  
];
export default Footer;
