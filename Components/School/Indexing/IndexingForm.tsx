import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues} from "@/UI/genericForm"
import { indexingActions, stepperState } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState) 

    const onSuccess = () => {
         
    }

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
     useCustomMutation(apiRequest.createIndexing, onSuccess)

    const submitHandler = (formData:any) => {
        if(formState == 'result'){
           handleSubmit(formData)
        }else{
            dispatch(indexingActions.storeIndexingData(formData))
        }
    }

    return(
        <>
            <GenericForm fields={ formState == 'profile' ? Fields.indexingProfileFields : 
                    formState == 'work' ? Fields.indexingWorkFields :
                    formState == 'referee' ?  Fields.indexingRefereeFields :
                    Fields.indexingResultFields
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
        </>
    )
}

export default IndexingForm