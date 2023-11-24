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

    let schKeysToRemove = ['School_1', 'School_2', 'School_3']
    let qualificationKeysToRemove = ['Qualifications_1', 'Qualifications_2', 'Qualifications_3']
    let refereeKeysToRemove = ['referee_address', 'referee_address_2', 'referee_name', 'referee_name_0', 'referee_number',
     'referee_number_1']

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
        console.log(formData);
        
        if(formState == 'result' && numOfSitting == '1' || formState == 'secondResult' && numOfSitting == '2'){
            const resultFormData = new FormData();

            // Append each key-value pair to the FormData
            for (const [key, value] of Object.entries(formData)) {
                if (gradeKeysToRemove.includes(key)) {
                    resultFormData.append(`grades.${key}`, value as string);
                    delete formData[key]
                } else if (refereeKeysToRemove.includes(key)) {
                    resultFormData.append(`referees.${key}`, value as string);
                    delete formData[key]
                } else if (qualificationKeysToRemove.includes(key)) {
                    resultFormData.append(`examinations.${key}`, value as string);
                    delete formData[key]
                } else if (schKeysToRemove.includes(key)) {
                    resultFormData.append(`school_attended.${key}`, value as string);
                    delete formData[key]
                } else {
                    resultFormData.append(key, value as string | Blob);
                }
            }   
            // console.log(resultFormData);
            for (const key of resultFormData.keys()) {
                console.log(key);
                if(key == 'referees'){
                    console.log("Referee is present");
                    
                }
              }
            
            // if (resultFormData.has("grades")) {
            //     console.log("There's grade here");
                
            //     resultFormData.set('grades', JSON.stringify(resultFormData.getAll('grades')));
            // }
    
            // if (resultFormData.has("referees")) {
            //     console.log("It has referees");
                
            //     resultFormData.set('referees', JSON.stringify(resultFormData.getAll('referees')));
            // }
    
            // if ('examinations' in resultFormData) {
            //     resultFormData.set('examinations', JSON.stringify(resultFormData.getAll('examinations')));
            // }
    
            // if ('school_attended' in resultFormData) {
            //     resultFormData.set('school_attended', JSON.stringify(resultFormData.getAll('school_attended')));
            // }
               
            handleSubmit(resultFormData)
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
                    formState == 'sch/cert' ? Fields.indexingSchCertDetails :
                    formState == 'referee' ? modifiedRefereeFields : formState == 'result' ?
                    Fields.indexingResultFields : duplicateGrades(Fields.indexingResultFields)
                } 
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
         
        </>
    )
}

export default IndexingForm