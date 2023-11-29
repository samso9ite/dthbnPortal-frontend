import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { examinationActions, stepperState, examinationRecord } from "@/store/examination-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import ApiStateHandler from "@/util/ApiStateHandler"
import {  } from "@/store/examination-slice"


const ExaminationForm = () => {
    const dispatch = useDispatch()
    // dispatch(examinationActions.switchState('profile'))
    let formState = useSelector(stepperState)
    console.log(formState);
    
    const[notifIsActive, setNotifIsActive] = useState<boolean>(false)
    console.log(useSelector(stepperState));

    const onSuccess:any = (data:any) => {
        setNotifIsActive(true)
        dispatch(examinationActions.switchState('profile'))
        // dispatch(examinationActions.se(false))
    }

    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
        useCustomMutation(apiRequest.createIndexing, onSuccess)

    const submitHandler = (formData:any) => {
        console.log(formData);
        
        
        dispatch(examinationActions.storeExaminationData(formData))
        // if(formState == 'profile'){
        //     dispatch(indexingActions.setIndexingStatus(true))
        // }
    
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
           {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler, isSuccess, data?.data.message)}
        </>
    )
}

export default ExaminationForm