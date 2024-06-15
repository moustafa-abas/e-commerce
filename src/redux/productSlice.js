import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    products:[],
    error:null,
    productId:null,
    productData:null,
    searchValue:''
}
export const fetchProducts=createAsyncThunk(
    'products/fetchProducts',async()=>{
        const response=await axios.get('https://ecommerce.routemisr.com/api/v1/products')
        return response.data
    }
)
export const fetchProductData=createAsyncThunk(
    'products/fetchProductData',async(_, {getState} ) =>{
        const id = getState().products.productId
        const response=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
        return response.data
    }
)
const productsSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
ProductDetails:(state,action)=>{
    state.productId=action.payload
},
SearchValue:(state,action)=>{
state.searchValue=action.payload
console.log(action.payload)
},
    },
    extraReducers:(builder)=>{
builder
.addCase(fetchProducts.pending,(state)=>{
    state.loading=true
    state.error=null
})
.addCase(fetchProducts.fulfilled,(state,action)=>{
    state.loading=false
    state.products=action.payload
    state.error=null
})
.addCase(fetchProducts.rejected,(state,action)=>{
    state.loading=false
    state.products=null
    state.error=action.payload
})
.addCase(fetchProductData.pending,(state)=>{
    state.loading=true
    state.error=null

})
.addCase(fetchProductData.fulfilled,(state,action)=>{
    state.loading=false
    state.productData=action.payload.data
    state.error=null
location.replace('/product')

})
.addCase(fetchProductData.rejected,(state,action)=>{
    state.loading=false
    state.productData=null
    state.error=action.payload

})
    }
})
export default productsSlice.reducer
export const{ProductDetails,SearchValue}=productsSlice.actions