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

    let schKeysToRemove = ['School with date_1', 'School with date_2', 'School with date_3']
    let qualificationKeysToRemove = ['Qualification with date_1', 'Qualification with date_2', 'Qualification with date_3']
    let refereeKeysToRemove = ['referee_address', 'referee_address_2', 'referee_name', 'referee_name_0', 'referee_number', 'referee_number_1']

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
            const valuesArray: any  = Object.entries(formData).reduce(
                (result:any, [key, value]) => {
                if (gradeKeysToRemove.includes(key)) {
                    result.grade = result.grade || {};
                    result.grade[key] = value;
                    
                } if(refereeKeysToRemove.includes(key)){
                    result.referee = result.referee || {};
                    result.referee[key] = value;
                } if(qualificationKeysToRemove.includes(key)){
                    result.qualifications = result.qualification || {};
                    result.qualifications[key] = value;
                }if(schKeysToRemove.includes(key)){
                    result.schools = result.schools || {};
                    result.schools[key] = value;
                }
                  return result;
                },
                {}
              );
             
            // Push the removedKeyValueArray into the grades array
            const resultArray = [{ grade: valuesArray }];
            console.log(resultArray);
            
            gradeKeysToRemove.forEach(key => delete formData[key])
            refereeKeysToRemove.forEach(key => delete formData[key])
            qualificationKeysToRemove.forEach(key => delete formData[key])
            schKeysToRemove.forEach(key => delete formData[key])
            
            console.log(formData);
            formData = {...formData, ...resultArray[0].grade, ...resultArray[0].grade.referee,
                ...resultArray[0].grade.qualifications, ...resultArray[0].grade.schools}
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