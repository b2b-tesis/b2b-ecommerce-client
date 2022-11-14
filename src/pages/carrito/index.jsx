import { useTheme } from "@mui/styles";

import ShopLayout from '../../common/components/layouts/ShopLayout';
import SEO from '../../common/components/seo/SEO';
import CartView from "../../modules/Cart/CartView";


const CartPage = () => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Carrito de Compras" />
      <CartView/>
    </ShopLayout>
  )
}


export default CartPage;