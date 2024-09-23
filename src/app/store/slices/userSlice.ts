import { createSlice } from "@reduxjs/toolkit";

const initialState={
  users:[],
  currentUser:null,
  loading:false,
  error:null,
  orders:[]
}

const userSlice = createSlice({
  name:'users',
  initialState,
  reducers:{
    // start loading users or userinfo
    fetchUsersStart:(state)=>{
        state.loading = true;
        state.error = null
    },
    //success when users are fetched for admin users
    fetchUsersSuccess:(state,action)=>{
      state.loading = false;
      state.users = action.payload // assign fetched user to state
    },
    // success when current users profile fetched
    fetchCurrentUsersSuccess:(state,action)=>{
      state.loading = false;
      state.currentUser = action.payload; // asign users profile to state 
    },

    // error handling
    fetchUsersFailure:(state,action)=>{
      state.loading = false;
      state.error =  action.payload;
    },
    // logged in user
    loginUser:(state,action)=>{
      state.currentUser = action.payload; // set login user's profile
      state.error = null
    },
    // logout user
    logoutUser:(state,action)=>{
      state.currentUser = null; // clear user's info after logout
      state.orders = []  // clear orders history after logout
    },
    // fetch user's order history
    fetchUsersOrder:(state,action)=>{
      state.orders = action.payload // assign order history in orders
    },
    //users error
    usersError:(state,action)=>{
      state.error = action.payload ; // set user error to error message
    }
  }
})

export const {fetchUsersStart,
              fetchUsersSuccess,
              fetchCurrentUsersSuccess,
              fetchUsersFailure,
              fetchUsersOrder,
              loginUser,
              logoutUser,
              usersError
            } = userSlice.actions

export default userSlice.reducer