import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardValue:[],
  cardShowPop:false,
  menuBar:false,
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
    },
    setMenuBar:(state,action)=>{
      state.menuBar=action.payload;
    }
  },
});
export const { setShowCard,setCardShowPop,setMenuBar } = productCardSlice.actions; 
export default productCardSlice.reducer; 