import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/features/counter/counterSlice'
export default configureStore({
  reducer: {
    counter:counterReducer,
  },
})
