import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        item:[],
        isCardAdded: false 
    },
    reducers: {
        toggleCardState: (state) => {
            state.isCardAdded = true;

          },
          
        addItem:(state,action)=>{
            state.item=action.payload
             
        },
        removeItem: (state, action) => {
            state.item = state.item.filter((_, index) => index !== action.payload); 
        },
        clearCard: (state) => {
            state.item = [];
          },
      
        
    }
})

export const {addItem,removeItem,clearCard,toggleCardState} = cardSlice.actions;
export default cardSlice.reducer;