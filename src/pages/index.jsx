// import styles from '../../styles/Home.module.css'
import { useTheme } from "@mui/styles";
import { Box } from "@mui/material";

import SEO from "../common/components/seo/Seo";
import ShopLayout from "../common/components/layouts/ShopLayout";



const HomePage = () => {
  const theme = useTheme();
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Inicio" />
      <Box bgcolor="white">
          <h1>Index</h1>
      </Box>
    </ShopLayout>
  )
}

export default HomePage
