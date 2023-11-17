import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues} from "@/UI/genericForm"
import { indexingActions, stepperState } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const[referees, setReferees] = useState([
        {'referee_name': '', 'referee_address': '', 'referee_number': ''}
    ]) 

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

    const addReferee = () => {
        console.log("This worked");
        
        setReferees([...referees, {'referee_name': '', 'referee_address': '', 'referee_number': ''}])
        console.log(referees);
        
    }

    return( 
        <>
            <GenericForm fields= { formState == 'profile' ? Fields.indexingProfileFields : 
                    formState == 'work' ? Fields.indexingWorkFields :
                    formState == 'referee' ?  referees.map((referee, index) => [
                        { name: `referee_name_${index}`, type: 'text', label: 'Referee Name', required: true },
                        { name: `referee_number_${index}`, type: 'number', label: 'Referee Number', required: true },
                        { name: `referee_address_${index}`, type: 'text', label: 'Referee Address', required: true },
                      ]) :
                    Fields.indexingResultFields
                    // formState == 'work' ? Fields.indexingWorkFields :
                    // formState == 'referee' ? Fields.indexingRefereeFields :
                    // Fields.indexingResultFields
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
            {formState === 'referee' && (
                <button type="button" onClick={addReferee}>
                Add Referee
                </button>
            )}
        </>
    )
}

export default IndexingForm