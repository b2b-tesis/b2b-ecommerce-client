import { Box, Stack } from "@mui/material";
import { styled } from '@mui/system';

import CustomerDashboardLayout from "../../../common/components/layouts/user-dashboard";
import Message from "./components/Message";
import RoomBar from "./components/Roombar";
import SendPanel from "./components/SendPanel";
import { useChat } from "./hooks/useChat";

const Main = styled('main')(({ theme }) => ({
  width: '80%',
  // minWidth: 750,
  height: 'calc(60vh - 32px)',
  borderRadius: '3px',
  // border: `1px solid ${theme.palette.grey[700]}`,
  boxShadow:'-5px 6px 9px -1px rgba(0,0,0,0.42)',
  margin: theme.spacing(2),
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    minWidth: '90%',
  },
}));



const ChatView = ({idOrder}) => {

  const {messages} = useChat(idOrder);
  const itemsMessages  =[...messages];
  return (
    <>
     <CustomerDashboardLayout>

   <Box sx={{display:'flex', justifyContent:'center', width:'100%'}}>
       <Main>
        <RoomBar/>
        <Stack
          spacing={1}
          direction="column-reverse"
          sx={{
            maxWidth: '100%',
            height: 'calc(100% - 150px)',
            padding: '20px',
            overflowX: 'hidden',
            overflowY: 'auto',
            backgroundColor: (theme) => theme.palette.grey[300]

          }}
          
        >
          {itemsMessages?.sort((a, b) => b.time - a.time).map((message, index) => (
            <Message 
              key={index} 
              message={message.message} 
              isOut={message.isOut}
            />
          ))}
        </Stack>
        <SendPanel />
      </Main>

   </Box>

    </CustomerDashboardLayout>
    </>
  );
};


export default ChatView;
