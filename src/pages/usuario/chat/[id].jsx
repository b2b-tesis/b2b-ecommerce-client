import { useTheme } from "@mui/styles";

import ShopLayout from '../../../common/components/layouts/ShopLayout';
import SEO from '../../../common/components/seo/SEO';
import ChatView from "../../../modules/User/chat/ChatView";



const ChatPage = ({idOrder}) => {
  const theme = useTheme();

  return (
    <ShopLayout topbarBgColor={theme.palette.grey[900]}>
      <SEO title="Chat" />
      <ChatView idOrder={idOrder}/>
    </ShopLayout>
  )
}

export const getServerSideProps = async ({params}) => {

  const {id = ''} = params;
  
  return {
    props: {
      idOrder:id
    }
  }
}

export default ChatPage;