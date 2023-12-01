import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { examinationActions, stepperState, examinationRecord, examUpdate, formData, updateRecordKey } from "@/store/examination-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import ApiStateHandler from "@/util/ApiStateHandler"
import {  } from "@/store/examination-slice"


const ExaminationForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const isUpdate = useSelector(examUpdate)
    const updateKey = useSelector(updateRecordKey)
    console.log(updateKey);
    
    
    let showSuccessMsg = true
    
    const[notifIsActive, setNotifIsActive] = useState<boolean>(false)

    const onSuccess:any = (data:any) => {
        setNotifIsActive(true)
        dispatch(examinationActions.switchState('profile'))
        dispatch(examinationActions.setExaminationStatus(false))
    }

    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }
    let fileUpload = true

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
        useCustomMutation(isUpdate ?(formData:FormValues) => apiRequest.updateExamRecord(formData,fileUpload,updateKey) : 
        apiRequest.createExamRecord, onSuccess)

    const submitHandler = (formData:any) => {
        if (formState == 'result') {
            const examFormData = new FormData();
            for(const [key, value] of Object.entries(formData)){
                examFormData.append(key, value as string | Blob)
            }
            let currentYear = new Date().getFullYear()
            let nextYear = currentYear + 1
            let year = currentYear+'-'+nextYear
            examFormData.append("year", year)
            handleSubmit(examFormData)
        }else{
            dispatch(examinationActions.storeExaminationData(formData))
            if(formState == 'profile'){
                dispatch(examinationActions.setExaminationStatus(true))
            }
        }   
    }

    return(
        <>
            <GenericForm fields= { 
                    formState == 'profile' ? Fields.examinationProfileFields : 
                    formState == 'work' ? Fields.examinationWorkFields : 
                    formState == 'sch/cert' ? Fields.examinationSchFields :
                    formState == 'referee' ? Fields.examinationRefereeFields :
                    Fields.examinationCertificateFields
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
           {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler,showSuccessMsg, isSuccess, data?.data.message)}
        </>
    )
}

export default ExaminationForm