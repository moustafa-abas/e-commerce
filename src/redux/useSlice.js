import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
isLogin:false,
loading:false,
userData:null,
error:null,
}
export const sign=createAsyncThunk('user/sign',
    async(data)=>{
        try{
        const response=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',
data)
        return response.data
    } catch (error) {
        throw new Error(error.message);
        }
    }
)
export const login=createAsyncThunk('user/login',
    async(data)=>{
        try{
        const response=await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',
data)
        return response.data
    } catch (error) {
        throw new Error(error.message);
        }
    }
)
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
logOut:(state)=>{
    // location.replace('/SignUp')
state.isLogin=false
state.userData=null
}
    },
    extraReducers:(builder)=>{
     builder
     .addCase(sign.pending,(state)=>{
state.loading=true
     })   
     .addCase(sign.fulfilled,(state,action)=>{
state.loading=false
state.isLogin=true
state.userData=action.payload
state.error=null
location.replace('/')
})   
     .addCase(sign.rejected,(state,action)=>{
state.loading=false
state.isLogin=false
state.error=action.payload
console.log(state.error)
     })   
     .addCase(login.pending,(state)=>{
state.loading=true
     })   
     .addCase(login.fulfilled,(state,action)=>{
state.loading=false
state.isLogin=true
state.userData=action.payload
state.error=null
location.replace('/')
     })   
     .addCase(login.rejected,(state,action)=>{
state.loading=false
state.isLogin=false
state.userData=null
state.error=action.payload
console.log(state.error)
     })   
    }
})
export default userSlice.reducer
export const{logOut}=userSlice.actions
