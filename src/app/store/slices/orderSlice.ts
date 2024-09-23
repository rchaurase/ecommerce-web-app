import { createSlice } from "@reduxjs/toolkit";

interface Order {
  id: number;
  status: string;
  items: Array<any>; // You can replace `any` with the actual type of the items
}

interface OrdersState {
  orders: Order[];
  currentOrder: Order | null;
  loading: boolean;
  error: string | null;
}


const initialState:OrdersState = {
  orders:[],
  currentOrder:null,
  loading:false,
  error:null
}

const orderSlice=createSlice({
  name:'orders',
  initialState,
  reducers:{
    //request for order by user
    orderRequestStart:(state)=>{
      state.loading = true;
      state.error = null
    },
    // order placement success
    placeOrderSuccess:(state,action)=>{
      state.loading = false;
      state.orders.push(action.payload);
      state.currentOrder = action.payload
    },
    // fetch all order for users (or admin)
    fetchOrderSuccess:(state,action)=>{
      state.loading = false
      state.orders = action.payload
    }, 
    // fetch single orders details
    fetchOrderByIdSuccess:(state,action)=>{
      state.loading = false;
      state.currentOrder = action.payload
    },
    // order failure
    orderFailure:(state,action)=>{
      state.loading=false;
      state.error = action.payload
    },
    // update order status for example admin changes order status
    upateOrderStatusSuccess:(state,action)=>{
      const {orderId,status} = action.payload;
      state.orders = state.orders.map((order)=>order.id === orderId?{...order,status}:order)
      if(state.currentOrder && state.currentOrder?.id === orderId){
        state.currentOrder.status = status
      }
    },
    clearCurrentOrder:(state)=>{
      state.currentOrder = null
    }

  }
});

export const {
  orderRequestStart,
  placeOrderSuccess,
  fetchOrderSuccess,
  fetchOrderByIdSuccess,
  orderFailure,
  upateOrderStatusSuccess,
  clearCurrentOrder
} = orderSlice.actions

export default orderSlice.reducer