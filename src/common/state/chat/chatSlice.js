import {createSlice} from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'CHAT',
  initialState: {messages: []},
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
    setNewMessage: (state, action) =>{
      state.messages = [action.payload, ...state.messages];
    }
  }
});

export const {setMessages, setNewMessage} = chatSlice.actions;
export default chatSlice.reducer;
