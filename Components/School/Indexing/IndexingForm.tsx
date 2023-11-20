import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { indexingActions, stepperState } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'


type ModifiedRefereeField = Field & { name: string };

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const[numOfSitting, setNumOfSitting] = useState('1')

    const onSuccess = () => {
         
    }

    // Duplicate form fields
    const modifiedRefereeFields:ModifiedRefereeField[] = [
        ...Fields.indexingRefereeFields,
        ...Fields.indexingRefereeFields.map((field:Field, index:number) => ({...field, name: `${field.name}_${index}` }))
    ]

    const onChangeSitting = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNumOfSitting(e.target.value)
    }
   
    const {handleSubmit, isSuccess, isError, error, isPending, data} =
     useCustomMutation(apiRequest.createIndexing, onSuccess)

    const submitHandler = (formData:any) => {
        if(formState == 'result' && numOfSitting == '1'){
           handleSubmit(formData)
        }else{
            dispatch(indexingActions.storeIndexingData(formData))
        }
    }

    return( 
        <>
            {formState == 'result' &&
                <select className="form-control" onChange={onChangeSitting}>
                    <option>Select number of sitting</option>
                    <option>One Sitting</option>
                    <option>Two Sitting</option>
                </select>
            }
            <GenericForm fields= { formState == 'profile' ? Fields.indexingProfileFields : 
                    formState == 'work' ? Fields.indexingWorkFields :
                    formState == 'referee' ? modifiedRefereeFields : formState == 'result' ?
                    Fields.indexingResultFields : Fields.indexingResultFields
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
         
        </>
    )
}

export default IndexingForm