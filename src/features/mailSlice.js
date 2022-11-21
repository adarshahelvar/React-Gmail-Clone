import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
        slectedMessage: null,
    },

    reducers: {
        openSendMessage: (state)=>{
            state.sendMessageIsOpen = true
        },
        closeSendMessage: (state)=>{
            state.sendMessageIsOpen = false
        },
        openMessage: (state, action)=>{
            state.slectedMessage = action.payload
        },
    },
});

export const { openSendMessage, closeSendMessage, openMessage } = mailSlice.actions;

export const selectsendMessageIsOpen = (state)=> state.mail.sendMessageIsOpen;

export const selectedMail = (state)=> state.mail.slectedMessage;

export default mailSlice.reducer;