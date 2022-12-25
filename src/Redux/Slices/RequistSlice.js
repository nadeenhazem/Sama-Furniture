import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// to get all data in api 
export const fetchData=createAsyncThunk(
    'FetchData',
    async(NameOfPage)=>{
        const response= await axios.get(`http://localhost:5000/${NameOfPage}`);
        return response.data
        
    }
)

//Add Data to Api
export const AddNewData=createAsyncThunk(
    'AddNewData',
    async([Newdata,NameOfPage])=>{
        const ConfigData={
            method:'POST',
            url:`http://localhost:5000/${NameOfPage}`,
            headers: {
                'Content-Type': 'application/json',
            },
            data:Newdata
        };
        const Newresponse= await axios(ConfigData)
        .then(function (Newresponse){
            console.log(JSON.stringify(Newresponse.data));
        })
            .catch(function(err){
                console.log("errrror" ,err)
           
        });
        return Newresponse.data
    }
)


//Update FurVAlue
export const UpdateData=createAsyncThunk(
    'UpdateData', 

    async([NameOfPage,Updatedata ,Value])=>{
         await axios.put(`http://localhost:5000/${NameOfPage}/${Updatedata.id}`,
        Value)
        .then((Value)=>{
            console.log(Value)
        })
        .catch((err)=>{
            console.log('errrr',err)
        })
    }
    
    
    )


//Delete from Fav Page
export const DeleteData=createAsyncThunk(
    'DeleteData',
    
    async([Deletedata,NameOfPage])=>{
        const response= await axios.delete(`http://localhost:5000/${NameOfPage}/${Deletedata.id}`)
        return response.data
    }

)


export const RequiestSlice=createSlice({
    name:'Data',
    initialState:{
        data:[],
        status:null,
        
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.fulfilled,(state,{payload})=>{
            state.data=payload;
            state.status='success'

        })
        builder.addCase(fetchData.pending,(state)=>{
            state.status='loading'

        })
        builder.addCase(fetchData.rejected,(state)=>{
            state.status='failed'

        })

        builder.addCase(UpdateData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(UpdateData.pending,(state)=>{
            console.log('loading')

        })
        builder.addCase(UpdateData.rejected,(state)=>{
            console.log('failed')

        })



        builder.addCase(AddNewData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(AddNewData.pending,(state)=>{
            console.log('loading')

        })
        builder.addCase(AddNewData.rejected,(state)=>{
            console.log('failed')

        })



        builder.addCase(DeleteData.fulfilled,(state, payload)=>{
            console.log('success')

        })
        builder.addCase(DeleteData.pending,(state)=>{
            console.log('loading')

        })
        builder.addCase(DeleteData.rejected,(state)=>{
            console.log('failed')

        })


    },
})


export default RequiestSlice.reducer

   
