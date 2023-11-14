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
    profileData: {},
    workData: {},
    RefereeData: {},
    stepperState: 'profile'
}

const indexingSlice = createSlice({
    name: 'Indexing',
    initialState,
    reducers: {
        storeIndexingData(state, action:PayloadAction<Indexing>){
            const formData = action.payload
            if(state.stepperState == 'profile'){
                state.profileData = formData
                state.stepperState = 'work'
            }else if(state.stepperState == 'work'){
                state.workData = formData;
                state.stepperState = 'referee'
            }else if(state.stepperState == 'referee'){
                state.RefereeData = formData;
                state.stepperState = 'result'
            }
        },
        switchState(state, action:PayloadAction<string>){
            state.stepperState = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.indexed = action.payload
        })
    }
})

export const selectIndexedData = (state: RootState) => state.index.indexed;
export const indexProfileDetails = (state:RootState) => state.index.profileData;
export const stepperState = (state:RootState) => state.index.stepperState

export const indexingActions = indexingSlice.actions

export default indexingSlice;