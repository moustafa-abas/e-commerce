import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  numOfProduct: '0',
  cartDetails: null,
  error: null,
  addedProduct: null,
  productCartId: null,
  productCount: null,
  successAdd:false
};
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (_, { getState }) => {
    const id = getState().products.productId;
    const token = getState().user.userData.token;
    console.log(token);
    const response = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      { productId: `${id}` },
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return response.data;
  }
);
export const getUserCart = createAsyncThunk(
  "cart/getUserCart",
  async (_, { getState }) => {
    const token = getState().user.userData.token;
    const response = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return response.data.data;
  }
);
export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { getState }) => {
    const token = getState().user.userData.token;
    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return response.data;
  }
);
export const updateQuantity = createAsyncThunk(
  "cart/updateQuantity",
  async ({ count, id }, { getState }) => {
    const token = getState().user.userData.token;
    const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count: `${count}` },
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return response.data;
  }
);
export const remove = createAsyncThunk(
  "cart/remove",
  async (_, { getState }) => {
    const token = getState().user.userData.token;
    const id = getState().products.productId;
    console.log(id);
    const response = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return response.data;
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productCart: (state, action) => {
      state.productCartId = action.payload;
    },

    changeCount: (state, action) => {
      if (action.payload.operator === "plus") {
        state.productCount = action.payload.count + 1;
      } else {
        if (state.productCount > 1) {
          state.productCount = action.payload.count - 1;
        } else {
          state.productCount = "1";
        }
      }
    },
    cancelAlert:(state)=>{
        state.successAdd=false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cartDetails = action.payload;
        state.numOfProduct = state.cartDetails.numOfCartItems;
state.successAdd=true

      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        
      })
      .addCase(getUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.loading = false;
        state.addedProduct = action.payload.products;
        state.numOfProduct = state.cartDetails.numOfCartItems;

      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.addedProduct = null;
        state.numOfProduct = "0";
      })
      .addCase(clearCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.loading = false;
        state.numOfProduct = 0;
        state.addedProduct = null;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cartDetails = action.payload;
        state.addedProduct = action.payload.data.products;
      })
      .addCase(updateQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(remove.pending, (state) => {
        state.loading = true;
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.loading = false;
        state.cartDetails = action.payload;
        state.addedProduct = action.payload.data.products;
        state.numOfProduct--;
      })
      .addCase(remove.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default cartSlice.reducer;
export const { productCart, changeCount ,cancelAlert} = cartSlice.actions;
