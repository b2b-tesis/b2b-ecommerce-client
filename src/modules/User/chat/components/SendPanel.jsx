import React from 'react';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useChat } from '../hooks/useChat';
import { CircularProgress } from '@mui/material';

const SendPanelWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  width: '100%',
  height: '44px',
  borderTop: `1px solid ${theme.palette.grey[700]}`,
  paddingTop:'40px',
  paddingLeft:'10px'
}));

const SendPanelInput = styled('input')(({ theme }) => ({
  width: '90%',
  height: '44px',
  padding: '0 14px',
  border: `1px solid ${theme.palette.grey[700]}`,
  outline: 'none',
  borderRadius:'10px'
}));


const SendPanel = () => {
  const {message, setMessage, sendUploadMessage, loading} = useChat();

  return (
    <SendPanelWrap>
      <SendPanelInput 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconButton 
        size="large" 
        color="secondary" 
        type="button"
        onClick={sendUploadMessage}  
        disabled={loading ? true : false}
      >
        {loading ? <CircularProgress color="secondary" size={25} /> : <SendRoundedIcon />}
      </IconButton>
    </SendPanelWrap>
  );
};

export default SendPanel;