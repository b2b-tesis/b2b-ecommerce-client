// import styles from '../../styles/Home.module.css'
import { useTheme } from "@mui/styles";
import { Box } from "@mui/material";

import SEO from "../common/components/seo/SEO";
import ShopLayout from "../common/components/layouts/ShopLayout";
import MainView from "../modules/Main/MainView";

const HomePage = () => {
  const theme = useTheme();
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Inicio" />
        <MainView/>
    </ShopLayout>
  )
}

export default HomePage
