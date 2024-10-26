import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardValue:[],
};

const productCardSlice = createSlice({
  name: 'productCardSlice',
  initialState, 
  reducers: {
    setShowCard:(state,action)=>{
      state.cardValue=action.payload;
    }
  },
});
export const { setShowCard } = productCardSlice.actions; 
export default productCardSlice.reducer; 