import { useTheme } from "@mui/styles";
import axios from "axios";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import OrderSaleDetailView from "../../../modules/User/orders-sales/OrderSaleDetailView";



const OrderSaleDetailPage = ({order}) => {
  const theme = useTheme();
  
  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Detalle de Orden de Compra" />
      <OrderSaleDetailView order={order}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params, req}) => {

  let {tokenb2b = ''} = req.cookies;
  const {id = ''} = params;
    
  if(tokenb2b === '' || !tokenb2b ){ 
    return {
      redirect: {
        destination: `/login?p=/usuario/ordenes-venta/${id}`,
          permanent: false,
        }
      }
    }
    
    const config = {
      headers: { Authorization: `Bearer ${tokenb2b}` }
    };
    
    let order = {};

  try{
    const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, config);
    order = data.data.results;
  } catch(err){
    return {
      redirect: {
          destination: `/login?p=/usuario/ordenes-venta/${id}`,
          permanent: false,
      }
    }
  }
  
  return {
    props: {
      order
    }
  }
}

export default OrderSaleDetailPage;