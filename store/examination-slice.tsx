import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { useCustomQuery } from "@/Hooks/apiCall"
import apiRequest from "@/APIs/ApiRequests";
import { RootState } from ".";

export const fetchData = createAsyncThunk('examination/fetchExaminationRecord', async (year:string) => {
    // const {isPending, isError, error, data } = useCustomQuery(apiRequest.examinationRecord, 'examination')
    // return data?.data
    const data:any = await apiRequest.examinationRecord(year)
    return data?.data
})

const initialState:ExaminationState = {
    examinationRecord:[],
    formData: {},
    stepperState: 'profile',
    isActive: false,
    isUpdate: false,
    updateRecordKey: 0
}

const examinationSlice = createSlice({
    name: 'Examination',
    initialState,
    reducers: {
        storeExaminationData(state, action:PayloadAction<Examination>){
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
            }
            else{
                state.formData = formData;
                state.stepperState = 'profile'
            }
        },
        switchState(state, action:PayloadAction<string>){
            state.stepperState = action.payload
        },
        setExaminationStatus(state, action:PayloadAction<boolean>){
            state.isActive = action.payload
        },
        setExamUpdate(state, action:PayloadAction<{isUpdate:boolean, updateRecordKey:number}>){
            state.isUpdate = action.payload.isUpdate,
            state.updateRecordKey = action.payload.updateRecordKey
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.examinationRecord = action.payload
        })
    }
})

export const examinationRecord = (state: RootState) => state.examination.examinationRecord
export const formData = (state:RootState) => state.examination.formData;
export const stepperState = (state:RootState) => state.examination.stepperState;
export const examinationState = (state:RootState) => state.examination.isActive
export const examUpdate = (state:RootState) => state.examination.isUpdate
export const updateRecordKey = (state:RootState) => state.examination.updateRecordKey

export const examinationActions = examinationSlice.actions

export default examinationSlice