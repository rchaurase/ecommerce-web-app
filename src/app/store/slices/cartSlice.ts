'use client'

import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/app/type/Type";

interface cartState {
  products:Product[],
  totalQuantity:number,
  totalAmounts:number
}

const initialState :cartState = {
    products:[],
    totalQuantity:0,
    totalAmounts:0
}

const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addToCart:(state,action)=>{
      const newProduct = action.payload; 
      state.products.push(newProduct)
      state.totalQuantity ++
      state.totalAmounts += newProduct.price
    },
    removeFromCart:(state,action)=>{
      const removeProduct = action.payload
      state.products.filter(product=>product.id !== removeProduct.id)
      state.totalQuantity --;
      state.totalAmounts -+ removeProduct.price
    },
    cartClear:(state)=>{
      state.products = [];
      state.totalAmounts = 0
      state.totalQuantity = 0
      
    }
  }
})


export const {addToCart,removeFromCart,cartClear} = cartSlice.actions

export default cartSlice.reducer