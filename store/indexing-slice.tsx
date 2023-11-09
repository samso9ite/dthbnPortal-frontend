import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useCustomQuery } from "@/Hooks/apiCall";
import apiRequest from "@/APIs/ApiRequests";
import { RootState } from ".";


export const fetchData = createAsyncThunk('indexing/fetchIndexData', async () => {
    const {isPending, isError, error, data } = useCustomQuery(apiRequest.indexingList, 'indexing')
    return data?.data
})


const indexingSlice = createSlice({
    name: 'Indexing',
    initialState: {indexed:[]},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.indexed = action.payload
        })
    }
})

export const selectIndexedData = (state: RootState) => state.index.indexed;
export const indexingActions = indexingSlice.actions

export default indexingSlice;