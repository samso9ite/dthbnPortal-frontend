import apiRequest from "@/APIs/ApiRequests"
import { Fields } from "@/Components/Forms/Forms"
import { useCustomMutation } from "@/Hooks/apiCall"
import GenericForm, {FormValues, Field} from "@/UI/genericForm"
import { indexingActions, stepperState, indexingData } from "@/store/indexing-slice"
import { useDispatch, useSelector } from "react-redux"
import {useState} from 'react'
import ApiStateHandler from "@/util/ApiStateHandler"


type ModifiedRefereeField = Field & { name: string };

const IndexingForm = () => {
    const dispatch = useDispatch()
    let formState = useSelector(stepperState)
    
    const[numOfSitting, setNumOfSitting] = useState('')
    const[notifIsActive, setNotifIsActive] = useState<boolean>(false)
    let showSuccessMsg = true

    // let gradeKeysToRemove = [
    //     'exam_number', 'exam_type', 'exam_year', 'Subject_1', 'Subject_2', 'Subject_3', 'Subject_4', 'Subject_5', 'Subject_6', 'Subject_7', 'Subject_8',
    //     'Grade_1', 'Grade_2', 'Grade_3', 'Grade_4', 'Grade_5', 'Grade_6', 'Grade_7', 'Grade_8'
    // ]
    // let secondGradeKeysToRemove = [
    //     'exam_number_0', 'exam_type_0', 'exam_year_0', 'Subject_1_0', 'Subject_2_1', 'Subject_3_2', 'Subject_4_3', 'Subject_5_4', 'Subject_6_5', 'Subject_7_6', 'Subject_8_7',
    //     'Grade_1_0', 'Grade_2_1', 'Grade_3_2', 'Grade_4_3', 'Grade_5_4', 'Grade_6_5', 'Grade_7_6', 'Grade_8_7'
    // ]
    

    // let schKeysToRemove = ['School_1', 'School_2', 'School_3']
    // let qualificationKeysToRemove = ['Qualifications_1', 'Qualifications_2', 'Qualifications_3']
    // let refereeKeysToRemove = ['referee_address', 'referee_address_2', 'referee_name', 'referee_name_0', 'referee_number',
    //  'referee_number_1']

    const onSuccess:any = (data:any) => {
        setNotifIsActive(true)
        dispatch(indexingActions.switchState('profile'))
        dispatch(indexingActions.setIndexingStatus(false))
        setNumOfSitting('');
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

    const {handleSubmit, isSuccess, isError, error, isPending, data} =
        useCustomMutation(apiRequest.createIndexing, onSuccess)

     const submitHandler = (formData:any) => {
        
        if(formState == 'result' && numOfSitting == '1' || formState == 'secondResult' && numOfSitting == '2'){
            
            const resultFormData = new FormData();
            // let referees:any = {};
            // let school_data:any = {};
            // let grades:any = {};
            // let examinations:any = {}
            let currentYear = new Date().getFullYear()
            // let secondGrades:any = {} 
            let nextYear = currentYear + 1
            let year = currentYear+'-'+nextYear
            const formDataCopy = { ...formData };
            
            // Append each key-value pair to the FormData
            // for (const [key, value] of Object.entries(formData)) {
            //     if (gradeKeysToRemove.includes(key)) {
            //         grades[key] = value
            //      } else if (refereeKeysToRemove.includes(key)) {
            //         referees[key] = value
            //     } else if (qualificationKeysToRemove.includes(key)) {
            //         examinations[key] = value
            //     } else if (schKeysToRemove.includes(key)) {
            //         school_data[key] = value
            //     } else if(secondGradeKeysToRemove.includes(key)){
            //         secondGrades[key] = value
            //     }
            // }   

            // gradeKeysToRemove.forEach((key) => delete formDataCopy[key]);
            // refereeKeysToRemove.forEach((key) => delete formDataCopy[key]);
            // qualificationKeysToRemove.forEach((key) => delete formDataCopy[key]);
            // schKeysToRemove.forEach((key) => delete formDataCopy[key]);
            // secondGradeKeysToRemove.forEach((key) => delete formDataCopy[key]);
            
            // formDataCopy.examinations = JSON.stringify(examinations)
            // formDataCopy.grades = JSON.stringify(grades)
            // if(numOfSitting == '2') {
            //     formDataCopy.secondGrades = JSON.stringify(secondGrades)
            // }
            // formDataCopy.referees = JSON.stringify(referees)
            // formDataCopy.school_attended = JSON.stringify(school_data)
            // formDataCopy.exam_sitting = numOfSitting
           
            formDataCopy.year = year
            
            for (const [key, value] of Object.entries(formDataCopy)) {
                    resultFormData.append(key, value as string | Blob);
                }
               
            handleSubmit(resultFormData)
        }else{
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
                onSubmit={submitHandler} span6={true} stepperForm={true} 
            />
           {notifIsActive && ApiStateHandler (isPending, isError, error, apiStatusHandler, showSuccessMsg, isSuccess, data?.data.message)}
        </>
    )
}

export default IndexingForm