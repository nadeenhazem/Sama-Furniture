import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./Slices/CategorySlice";
import  RequiestSlice  from "./Slices/RequistSlice";

const store=configureStore({
    reducer:{
        Category:CategorySlice,
        Data:RequiestSlice,

    }
})
export default store