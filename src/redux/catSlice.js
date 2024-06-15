import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    loading:false,
    category:[],
    error:null
}
export const fetchCategories= createAsyncThunk(
    'category/fetchCategories',async()=>{
        const response =await axios.get('https:ecommerce.routemisr.com/api/v1/categories')
     return response.data

})
const categorySlice=createSlice({
    name:'categories',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategories.pending,(state)=>{
            state.loading=true
            state.error=null
        })
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.loading=false
            state.category=action.payload
            state.error=null
        })
        .addCase(fetchCategories.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload

        })
    }
})
export default categorySlice.reducer
// export const{}=productsSlice.actions