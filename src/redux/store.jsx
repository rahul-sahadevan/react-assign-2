
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./action/productsSlice";
import thunk from "redux-thunk";


const store = configureStore({
    reducer:{
        products:productsSlice
    },
    middleware: [thunk]
})
export default store