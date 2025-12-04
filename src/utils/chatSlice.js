import { createSlice } from "@reduxjs/toolkit";
import { numb_message } from "./contants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(numb_message, 1);
            state.messages.push(action.payload);
        },
        removeMessage: (state) => {
            state.messages.shift();
        }
    }

})

export const { addMessage, removeMessage } = chatSlice.actions;
export default chatSlice.reducer;