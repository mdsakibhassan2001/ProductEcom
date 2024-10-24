import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardValue:[],
};

const productCardSlice = createSlice({
  name: 'productCardSlice',
  initialState, 
  reducers: {
    addCard: (state,{payload}) => {
      if(state.cardValue.length==0){
        state.cardValue.push({id: 1,status:"panding",...payload})
      }else{
        const lastEliment=state.cardValue.at(-1)
        state.cardValue.push({id:lastEliment.id+1,status:"panding",...payload})
      }
       
    },
  },
});

export const { addCard } = productCardSlice.actions; 

export default productCardSlice.reducer; 