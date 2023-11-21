import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { indexingActions, stepperState, indexingData } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'


type ModifiedRefereeField = Field & { name: string };

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    const indexingFormData = useSelector(indexingData)
    const[numOfSitting, setNumOfSitting] = useState('')

    let gradeKeysToRemove = [
        'Subject_1', 'Subject_2', 'Subject_3', 'Subject_4', 'Subject_5', 'Subject_6', 'Subject_7', 'Subject_8',
        'Grade_1', 'Grade_2', 'Grade_3', 'Grade_4', 'Grade_5', 'Grade_6', 'Grade_7', 'Grade_8'
    ]

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
        
        if(formState == 'result' && numOfSitting == '1' || formState == 'secondResult' && numOfSitting == '2'){
            let data:any = '';
            let grade: { key: string; value: string }[][] = []
            const array = Object.keys(formData)
            console.log(array);
            
            const valuesArray: any  = Object.entries(formData).reduce(
                (result:any, [key, value]) => {
                  if (gradeKeysToRemove.includes(key)) {
                    result[key] = value;
                  }
                  return result;
                },
                {}
              );
             

            // Push the removedKeyValueArray into the grades array
            grade.push(valuesArray);

            console.log(grade);
            
            gradeKeysToRemove.forEach(key => delete formData[key])
            console.log(valuesArray);
            console.log(formData);
            

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