import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { useCustomQuery } from "@/Hooks/apiCall"
import apiRequest from "@/APIs/ApiRequests";
import { RootState } from ".";



export const fetchData = createAsyncThunk('examination/fetchExaminationRecord', async () => {
    const {isPending, isError, error, data } = useCustomQuery(apiRequest.examinationRecord, 'examination')
    return data?.data
})

const initialState:ExaminationState = {
    examinationRecord:[],
    formData: {},
    stepperState: 'profile',
    isActive: false
}

const examinationSlice = createSlice({
    name: 'Examination',
    initialState,
    reducers: {
        storeExaminationData(state, action:PayloadAction<Indexing>){
            const formData = action.payload
             
            if(state.stepperState == 'profile'){
                state.formData = formData
                state.stepperState = 'work'
            }else if(state.stepperState == 'work'){
                state.formData = formData;
                state.stepperState = 'sch/cert'
            }else if(state.stepperState == 'sch/cert'){
                state.formData = formData;
                state.stepperState = 'referee'
            }else if(state.stepperState == 'referee'){
                state.formData = formData;
                state.stepperState = 'result'
            }else {
                state.stepperState = 'secondResult'
            }
        },
        switchState(state, action:PayloadAction<string>){
            state.stepperState = action.payload
        },
        setExaminationStatus(state, action:PayloadAction<boolean>){
            state.isActive = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.examinationRecord = action.payload
        })
    }
})