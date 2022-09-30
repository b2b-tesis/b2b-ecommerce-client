import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

import SEO from "../common/components/seo/SEO";
import FlexRowCenter from "../common/components/flexbox/FlexRowCenter";
import FlexBox from "../common/components/flexbox/FlexBox";
import { H2 } from "../common/components/Typography";

const Error404 = () => {
  const router = useRouter();

  const handleGoBack = () => router.back();

  return (
    <FlexRowCenter px={2} minHeight="100vh" flexDirection="column">
      <SEO title="Página no encontrada" />
      <H2 mb={3}>Error 404: Página no encontrada</H2>

      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          sx={{
            m: 1,
          }}
          onClick={handleGoBack}
        >
          Página anterior
        </Button>

        <Link href="/" passHref>
          <Button
            variant="contained"
            color="primary"
            sx={{
              m: 1,
            }}
          >
            Regresar a Inicio
          </Button>
        </Link>
      </FlexBox>
    </FlexRowCenter>
  );
};

export default Error404;
