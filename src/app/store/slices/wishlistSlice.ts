'use client'
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "@/app/type/Type";

interface wishlistState {
  products:Product[],
  
}
const initialState :wishlistState = {
    products:[],
  
}
const wishlistSlice = createSlice({
  name:'wishlist',
  initialState,
  reducers:{
    addToWishlist:(state,action)=>{
      const newProduct = action.payload; 
      state.products.push(newProduct)
    },
    removeFromWishlist:(state,action)=>{
      state.products.filter(product=>product.id !== action.payload.id)
    }
    
  }
})


export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer