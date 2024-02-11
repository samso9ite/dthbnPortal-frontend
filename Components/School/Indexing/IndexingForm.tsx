import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import { ToastContainer, toast } from 'react-toastify';
import GenericForm, {FormValues} from "@/UI/genericForm"
import { indexingActions, stepperState, indexingData, indexingState, indexingUpdate, updateRecordKey } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import ApiStateHandler from "@/util/ApiStateHandler"


type ModifiedRefereeField = Field & { name: string };

type Field = {
    name:string;
    type:string;
    options?: {label:string, value:string,}[];
    label: string;
    required?:boolean;
    stepperForm?:true
}

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const isUpdate = useSelector(indexingUpdate)
    
    const[numOfSitting, setNumOfSitting] = useState('')
    const[notifIsActive, setNotifIsActive] = useState<boolean>(false)
    const[employmentStatus, setEmploymentStatus] = useState<string>('true')
    const updateKey = useSelector(updateRecordKey)
    let showSuccessMsg = true

    const onSuccess:any = () => {
        dispatch(indexingActions.resetIndexingData({}))
        window.location.reload()
        setNotifIsActive(true)
        dispatch(indexingActions.setIndexingStatus(false))
        dispatch(indexingActions.switchState('profile'))
        setNumOfSitting('');
        if(isUpdate == true){
            dispatch(indexingActions.setIndexingUpdate({isUpdate:false, updateRecordKey:0}))
        }
    }
   
    const apiStatusHandler = (statusData:boolean) => {
        setNotifIsActive(statusData)
    }

    // Duplicate form fields
    const modifiedRefereeFields:ModifiedRefereeField[] = [
        ...Fields.indexingRefereeFields,
        ...Fields.indexingRefereeFields.map((field:Field, index:number) => ({...field, name: `${field.name}_${index}` }))
    ]

    const onChangeSitting = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNumOfSitting(e.target.value)
    }
    let fileUpload = true

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
        useCustomMutation(isUpdate ?(formData:FormValues) => apiRequest.updateIndexRecord(formData,fileUpload,updateKey) : 
        apiRequest.createIndexing, onSuccess)

     const submitHandler = (formData:any) => {
        // if (numOfSitting == '1' || numOfSitting == '2'){
            if(formState == 'result' && numOfSitting == '1' || formState == 'secondResult' && numOfSitting == '2'){
                let resultFormData = new FormData();
                let currentYear = new Date().getFullYear()
                let prevYear = currentYear - 1
                let year = prevYear+'-'+currentYear
               
                if(!isUpdate){
                    formData.year = year
                }
               
                if((formData.profile_image == '' || formData.marriage_cert == '' 
                    || formData.o_level_cert == '' || formData.o_level_cert_0 == '') && !isUpdate){
                    toast.error("Please set the required image", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        theme: "light",
                    })
                }
                
                for (const [key, value] of Object.entries(formData)) {
                    if( 
                        (key === 'profile_image' || key === 'o_level_cert' || key === 'o_level_cert_0' || key === 'marriage_cert')  &&
                        !(value instanceof File)
                    ){
                    //    console.log("Not File");
                    }else{
                        resultFormData.append(key, value as string | Blob);
                    }
                }
                resultFormData.append('exam_sitting', numOfSitting)
                handleSubmit(resultFormData)
            }else if(formState == 'result' && numOfSitting == ''){
                toast.error("Please set number of exam sitting", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    theme: "light",
                })
            }
            else{
                dispatch(indexingActions.storeIndexingData(formData))
                if(formState == 'profile'){
                    dispatch(indexingActions.setIndexingStatus(true))
                }
            }
    }

    const duplicateGrades = (fields:any) => {
        const duplicatedFields = fields.flatMap((field:any) => {
            const fieldArray = Array.isArray(field) ? field : [field];
            return fieldArray.map((fieldItem, index) => ({
                ...fieldItem,
                name: `${fieldItem.name}_${index}`,
            }));
        });

        return duplicatedFields;
    };
    
    return( 
        <>
            {formState == 'result' &&
                <select className="form-control" onChange={onChangeSitting}>
                    <option value=''>Select number of sitting</option>
                    <option value='1'>One Sitting</option>
                    <option value='2'>Two Sitting</option>
                </select>
            }
            
            <GenericForm fields= { formState == 'profile' ? Fields.indexingProfileFields : 
                    formState == 'work' ? Fields.indexingWorkFields : 
                    formState == 'sch/cert' ? Fields.indexingSchCertDetails :
                    formState == 'referee' ? modifiedRefereeFields : formState == 'result' ?
                    Fields.indexingResultFields : duplicateGrades(Fields.indexingResultFields)
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} employmentStatus={employmentStatus} 
            />
           {(notifIsActive || isError) && ApiStateHandler (isPending, isError, error, apiStatusHandler, showSuccessMsg, isSuccess, data?.data.message)}
        </>
    )
}

export default IndexingForm