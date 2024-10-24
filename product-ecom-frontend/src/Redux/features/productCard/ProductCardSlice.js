import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardValue:[],
  cardSum:0
};

const productCardSlice = createSlice({
  name: 'productCardSlice',
  initialState, 
  reducers: {
    addCard: (state,{payload}) => {
        state.cardValue.push({...payload})
        state.cardSum += 1
    },
  },
});

export const { addCard } = productCardSlice.actions; 

export default productCardSlice.reducer; 