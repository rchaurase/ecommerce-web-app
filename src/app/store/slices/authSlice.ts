import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate:false,
  user:{
    id:null,
    username:null,
  },
  token:null
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    login:(state,action)=>{
      state.isAuthenticate = true;
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logout:(state)=>{
      state.isAuthenticate=false,
      state.user={id:null,username:null},
      state.token=null
    }
  }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer