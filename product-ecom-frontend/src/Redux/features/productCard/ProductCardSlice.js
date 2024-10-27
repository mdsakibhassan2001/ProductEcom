import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardValue:[],
  cardShowPop:false,
};

const productCardSlice = createSlice({
  name: 'productCardSlice',
  initialState, 
  reducers: {
    setShowCard:(state,action)=>{
      state.cardValue=action.payload;
    },
    setCardShowPop:(state,action)=>{
      state.cardShowPop=action.payload;
    }
  },
});
export const { setShowCard,setCardShowPop } = productCardSlice.actions; 
export default productCardSlice.reducer; 