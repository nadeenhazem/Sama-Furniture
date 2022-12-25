import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory=createAsyncThunk(
    'Category/fetchCategory',
    async()=>{
        const response= await axios.get('http://localhost:5000/categoure')
        return response.data
    }
)


export const CategorySlice=createSlice({
    name:'Category',
    initialState:{
        data:[],
        status:null,
    },
    reducers:{},
    extraReducers:{
        [fetchCategory.fulfilled]:(state,payload)=>{
            state.data=payload;
            state.status='success'
        },
        [fetchCategory.pending]:(state)=>{
            state.status='loading'

        },
        [fetchCategory.rejected]:(state)=>{
            state.status='failed'

        },
    }
})
export default CategorySlice.reducer