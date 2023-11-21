import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { indexingActions, stepperState, indexProfileDetails, indexRefereeDetails,
    indexWorkDetails, indexFirstResultDetails, indexSecondResultDetails } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'


type ModifiedRefereeField = Field & { name: string };

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const profileDetails = useSelector(indexProfileDetails)
    const workDetails = useSelector(indexWorkDetails)
    const refereeDetails = useSelector(indexRefereeDetails)
    const firstResult = useSelector(indexFirstResultDetails)
    const secondResult = useSelector(indexSecondResultDetails)
    const[numOfSitting, setNumOfSitting] = useState('')

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

    // const getFormData = () => {
        

    //    
    //     console.log(data);
    //     return data
    // }
   
    const {handleSubmit, isSuccess, isError, error, isPending, data} =
     useCustomMutation(apiRequest.createIndexing, onSuccess)
     const submitHandler = (formData:any) => {
        console.log(numOfSitting);
        
        if(formState == 'result' && numOfSitting == '1' || formState == 'secondResult' && numOfSitting == '2'){
            let data:any = '';
            
            if(numOfSitting ==  '1'){
                console.log(formData);
                data = {...profileDetails, ...workDetails, ...refereeDetails, ...formData}
            } else if(numOfSitting == '2'){
                data = {...profileDetails, ...workDetails, ...refereeDetails, ...firstResult, ...formData}
            }
            
            console.log(data);
            
            
            handleSubmit(formData)
        }else{
            dispatch(indexingActions.storeIndexingData(formData))
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
    
        console.log(duplicatedFields);
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
                    formState == 'referee' ? modifiedRefereeFields : formState == 'result' ?
                    Fields.indexingResultFields : duplicateGrades(Fields.indexingResultFields)
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
         
        </>
    )
}

export default IndexingForm