import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { indexingActions, stepperState, indexingData } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import ApiStateHandler from "@/util/ApiStateHandler"


const ExaminationForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const[notifIsActive, setNotifIsActive] = useState<boolean>(false)

    const onSuccess:any = (data:any) => {
        setNotifIsActive(true)
        dispatch(indexingActions.switchState('profile'))
        dispatch(indexingActions.setIndexingStatus(false))
    }

    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
        useCustomMutation(apiRequest.createIndexing, onSuccess)

    const submitHandler = (formData:any) => {
        console.log(formData);
    
    }

    return(
        <>
            <GenericForm fields= { 
                    formState == 'profile' ? Fields.examinationProfileFields : 
                    formState == 'work' ? Fields.examinationWorkFields : 
                    formState == 'sch/cert' ? Fields.examinationCertificateFields :
                    formState == 'referee' ? Fields.examinationRefereeFields :
                    formState == 'result'
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
           {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler, isSuccess, data?.data.message)}
        </>
    )
}

export default ExaminationForm