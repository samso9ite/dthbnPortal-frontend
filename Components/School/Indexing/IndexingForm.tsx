import { Fields } from "@/Components/Forms/Forms"
import GenericForm, {FormValues} from "@/UI/genericForm"
import { indexingActions, stepperState } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState) 
    
    const submitHandler = (formData:any) => {
        dispatch(indexingActions.storeIndexingData(formData))
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