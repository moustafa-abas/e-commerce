import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import categorySlice from'./catSlice'
import productsSlice from'./productSlice'
import cartSlice from'./cartSlice'
import userSlice from'./useSlice'

const persistConfig = {
  key: 'e-commerce',
  storage,
};

const categoryReducer = persistReducer(persistConfig, categorySlice);
const productsReducer = persistReducer(persistConfig, productsSlice);
const cartReducer = persistReducer(persistConfig, cartSlice);
const userReducer = persistReducer(persistConfig, userSlice);
const rootReducer = {
  categories:categoryReducer,
  products:productsReducer,
  cart:cartReducer,
  user:userReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);