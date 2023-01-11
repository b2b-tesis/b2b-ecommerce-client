import { styled } from '@mui/system';
import { Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";

const MessageWrap = styled('div')( ({theme}) => ({
  display: 'flex',
  width: '100%',
  paddingTop:'20px'
}));

const MessagePaper = styled(Paper)( ({ theme }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1.5),
  borderRadius:'10px'
}));

const Message = ({ message, isOut }) => {
  const theme = useTheme();

  return (
    <MessageWrap style={{ justifyContent: isOut ? 'flex-end' : 'flex-start' }}>
      <MessagePaper style={
        { 
          color: isOut ? theme.palette.common.black : theme.palette.common.black,
          backgroundColor: isOut ? theme.palette.secondary[200] : theme.palette.grey[100],
        }
      }>
        <Typography>{message}</Typography>
      </MessagePaper>
    </MessageWrap>
  );
};

export default Message;