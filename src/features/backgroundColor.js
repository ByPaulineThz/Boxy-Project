import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
       {
        inputNumber: 1,
        name: "Body background color",
        value: '#f3f4f6',
        type : 'color',
       
      },
    ]

export const bgSlice = createSlice({
    name: 'backgroundColor',
    initialState,
    reducers:{
        updateBgValue: (state, action) => {
          state.find(el => el.inputNumber === action.payload.inputNumber).value = action.payload.value
 
        }
    }
})

export const{updateBgValue} = bgSlice.actions
export default bgSlice.reducer