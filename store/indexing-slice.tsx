import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useCustomQuery } from "@/Hooks/apiCall";
import apiRequest from "@/APIs/ApiRequests";
import { RootState } from ".";

 
export const fetchData = createAsyncThunk('indexing/fetchIndexData', async () => {
    const {isPending, isError, error, data } = useCustomQuery(apiRequest.indexingList, 'indexing')
    return data?.data
})

const initialState:IndexingState = {
    indexed:[],
    indexingData: {},
    stepperState: 'profile',
    isActive: false
}

const indexingSlice = createSlice({
    name: 'Indexing',
    initialState,
    reducers: {
        storeIndexingData(state, action:PayloadAction<Indexing>){
            const formData = action.payload
             
            if(state.stepperState == 'profile'){
                state.indexingData = formData
                state.stepperState = 'work'
            }else if(state.stepperState == 'work'){
                state.indexingData = formData;
                state.stepperState = 'sch/cert'
            }else if(state.stepperState == 'sch/cert'){
                state.indexingData = formData;
                state.stepperState = 'referee'
            }else if(state.stepperState == 'referee'){
                state.indexingData = formData;
                state.stepperState = 'result'
            }else {
                state.stepperState = 'secondResult'
            }
        },
        resetIndexingData(state, action:PayloadAction<any>){
            console.log("Entered");
            state.indexingData = {}
            console.log(state.indexingData);
            
        },
        switchState(state, action:PayloadAction<string>){
            console.log(action.payload);
            
            state.stepperState = action.payload
            console.log(state.stepperState);
            
        },
        setIndexingStatus(state, action:PayloadAction<boolean>){
            state.isActive = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.indexed = action.payload
        })
    }
})

export const selectIndexedData = (state: RootState) => state.index.indexed;
export const indexingData = (state:RootState) => state.index.indexingData;
export const stepperState = (state:RootState) => state.index.stepperState;
export const indexingState = (state:RootState) => state.index.isActive;
export const resetIndexingData = (state:RootState) => state.index.indexingData

export const indexingActions = indexingSlice.actions

export default indexingSlice;