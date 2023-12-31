import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useCustomQuery } from "@/Hooks/apiCall";
import apiRequest from "@/APIs/ApiRequests";
import { RootState } from ".";

export const fetchData = createAsyncThunk('indexing/fetchIndexData', async (year:string) => {
    // const {isPending, isError, error, data } = useCustomQuery(apiRequest.indexingList(year), 'indexing')
    const data:any = await apiRequest.indexingList(year)
    console.log(data);
    
    return data?.data
})

const initialState:IndexingState = {
    indexed:[],
    indexingData: {},
    stepperState: 'profile',
    isActive: false,
    isUpdate: false,
    updateRecordKey: 0
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
            }else if(state.stepperState == 'result'){
                state.indexingData = formData;
                state.stepperState = 'secondResult'
            }else{
                state.indexingData = formData;
                state.stepperState = 'profile'
            }
        },
        resetIndexingData(state, action:PayloadAction<any>){
            state.indexingData = {}  
        },
        switchState(state, action:PayloadAction<string>){
            state.stepperState = action.payload
            
        },
        setIndexingStatus(state, action:PayloadAction<boolean>){
            state.isActive = action.payload
        },
        setIndexingUpdate(state, action:PayloadAction<{isUpdate:boolean, updateRecordKey:number}>){
            state.isUpdate = action.payload.isUpdate,
            state.updateRecordKey = action.payload.updateRecordKey
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
export const indexingUpdate = (state:RootState) => state.index.isUpdate
export const updateRecordKey = (state:RootState) => state.index.updateRecordKey

export const indexingActions = indexingSlice.actions

export default indexingSlice;