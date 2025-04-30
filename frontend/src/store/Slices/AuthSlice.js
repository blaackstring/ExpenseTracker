import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'AuthSlice',
    initialState:{
        isLoggedIn:false,
        user:{}
    },

    reducers:{
        UserLogin:(state,action)=>{
            console.log(action.payload);
          state.isLoggedIn=true,
          state.user=action.payload
        }
        ,
        UserLogout:(state,action)=>{
            state.isLoggedIn=false,
            state.user=null
          }
    }
})

export const  {UserLogin,UserLogout}=authSlice.actions
export default authSlice.reducer;
