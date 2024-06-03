import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    loading:false,
    numOfProduct:'0',
products:null,
error:null
}
export const addToCart=createAsyncThunk('cart/addToCart',
async(_,{getState})=>{
    const id =getState().products.productId
    const token=getState().user.userData.token
    console.log(token)
    const response=await axios.post('https://ecommerce.routemisr.com/api/v1/cart',
    {"productId":`${id}`},
    {
        headers:{
            token:`${token}`
        }}
    )
return response.data
    }
)
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(addToCart.pending,(state)=>{
         state.loading=true
        })
        .addCase(addToCart.fulfilled,(state,action)=>{
         state.loading=false
         state.products=action.payload
         state.numOfProduct=state.products.numOfCartItems
         alert("process success")
        })
        .addCase(addToCart.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            alert('not added')
        })

    }
})
export default cartSlice.reducer