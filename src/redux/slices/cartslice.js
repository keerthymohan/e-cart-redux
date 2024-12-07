import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addItemtoCart : (state,action)=>{
            state.push(action.payload)
        },
        removecartitem : (state,action)=>{
            return state.filter((item)=>item.id != action.payload)
        },
        emptyCart : (state)=>{
            return state = []
        }

    }
})
export const {addItemtoCart , removecartitem , emptyCart} = cartslice.actions

export default cartslice.reducer