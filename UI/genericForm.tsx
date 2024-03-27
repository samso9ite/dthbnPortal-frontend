import CustomSelect, { customMultipleSelect } from "./customSelect";
import {useEffect, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';
import Button from "./stepperButton";
import { useSelector } from "react-redux";
import { indexingData, indexingState, indexingUpdate, stepperState as indexStepperState} from "@/store/indexing-slice";
import { stepperState as examStepperState, formData, examUpdate} from "@/store/examination-slice";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { examinationState } from "@/store/examination-slice";
import api from "@/APIs/api";

type Field = {
    name:string;
    type:string;
    options?: {label:string, value:string, }[];
    label: string;
    required?:boolean;
    stepperForm?:true
}

type arrayField = string

export type FormValues = {
    [key: string]: string | undefined | arrayField[]   
}

type Props = {
    fields: Field[];
    onSubmit: (values: FormValues) => void;
    initialValues?: FormValues;
    isPending?: boolean, 
    span6?:boolean, 
    stepperForm?:boolean,
    clearForm?: () => void,
    employmentStatus?:string
}

const GenericForm:React.FC<Props> = ({fields, onSubmit, initialValues, isPending, span6, stepperForm, employmentStatus })  => {
    const router = useRouter()
    console.log(initialValues);
    
    const [values, setValues] = useState<any>(initialValues || {});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formStatus, setFormStatus] = useState<boolean>(false)
    const [storeFormData, setStoreFormData] = useState<any>({});
    const [stepper, setStepper] = useState<string>('');
    const [isUpdate, setIsUpdate] = useState<boolean>(false)
    const [selected, setSelected] = useState([]);

    let indexingFormData = useSelector(indexingData)
    let examFormData = useSelector(formData) 
    let indexingStatus = useSelector(indexingState)
    let examinationStatus = useSelector(examinationState)
    let indexingRoute = router.pathname=='/school/indexing/new'
    let examRoute = router.pathname=='/school/exam/new'
    const indexStepper = useSelector(indexStepperState)
    const examStepper = useSelector(examStepperState)
    const isExamUpdate = useSelector(examUpdate)
    const indexingUpdateStatus = useSelector(indexingUpdate)
    
    useEffect(() => {
        if(indexingStatus == true  && indexingRoute == true ){
            setFormStatus(true)
            setStepper(indexStepper)
            setStoreFormData(indexingFormData)
        }else if(examinationStatus == true && examRoute == true){
            setFormStatus(true)
            setStepper(examStepper)
            setStoreFormData(examFormData)
        } 
    }, [stepper, storeFormData, formStatus])
    
    useEffect(() => {
        let uncompletedForm = formStatus == true  && stepper !== 'profile'
        let updatingForm = formStatus == true  && stepper == 'profile' && 
        (isExamUpdate == true || indexingUpdateStatus == true)
        
        if(uncompletedForm || updatingForm){
            setValues(storeFormData)
            
            if(uncompletedForm){
                toast.success("Please Reset all Images", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",

                })
            }
        }else{
            setValues(initialValues)
        }
  
    }, [formStatus, indexingStatus, examinationStatus])
    
    const handleChange = (e:React.ChangeEvent<any>) => {
        let {name, value, files, placeholder} = e.target;
       
        let file = files && e.target.files[0]
       
        if(file?.size > 1 * 1024 * 1024){
            toast.error("File size shouldn't be more than 1mb, reduce your file size and re-upload", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",

            })  
          }
        // Handle stepper form fields
       if (fields.find(field => field.name === name && field.stepperForm)) {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: [
                ...(prevValues[name] || []), // Ensure it's an array or use an empty array
                {
                    [name]: files ? file : value,
                },
            ],
        }))
        } else {
        setValues((prevValues) => ({
            ...prevValues,
            [name]: files ? file : value || '',
        }));
        } if(fields.find((field) =>  field.name === name && field.required)){
            setErrors((prevErrors) => ({
                ...prevErrors, [name]:''
            }))
        }

        if(placeholder == "License Number"){
            fields.map(field => {
                setTimeout(() => {
                    if((values["code"]) ){
                    api.axios_instance.get(api.baseUrl+"auth/verify_prof_code/"+value)
                    .then(res => {
                        setValues((prevValues) => ({
                            ...prevValues,
                            username : res.data.data.name,
                            is_professional: 'true'
                        }));

                    }).catch(err => {
                        console.log("error");
                    })
                }}, 4000)
            })
           
            
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        const programmeExist = fields.some(item => item.name == 'schCode');
        const newErrors: Record<string, string> = {}
        fields.forEach((field) => {
            if(field.required && !values[field.name]){
                newErrors[field.name] = "This field is required";
            }else if(field.name){

            }
        });
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
        }else if(programmeExist && selected.length == 0){
            toast.error('Programme field is required', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
            })
        }
        else{
            setErrors({})
            if(selected.length > 0){
                values.programme = selected
                values.is_school = '1'
            }
            onSubmit(values)
        }
        
    }
    
    return(
        <form onSubmit={handleSubmit} encType="multipart/form-data">
             {(employmentStatus == 'true' && stepper == 'work') ? '' :
                <div className={span6 == true ? 'grid grid-cols-12 gap-4 gap-y-5 mt-5' : ''}>
                    
                    {fields.map((field) => {
                        const fieldArray = Array.isArray(field) ? field : [field];
                        return fieldArray.map((field, index) => {
                        const { name, type, options, label } = field;
                        return(
                        
                            <div key={name} className={span6 == true ? 'intro-y col-span-12 sm:col-span-6' : ''}>
                                {type === 'select' && options ? (
                                    <>
                                        <select name={name} value={values[name] || ''} className="form-select form-select-lg  sm:mr-2 mt-4" 
                                            onChange={handleChange}>
                                            {options.map((option:{value:string, label:string}) => (  
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))
                                            }
                                        </select>
                                        {field.required && errors[name] && (
                                            <p className="text-red-500">{errors[name]}</p>
                                        )}
                                    </>
                                ): type === 'multiselect' ? (
                                    <div>
                                        <Multiselect className='mt-4'
                                            onKeyPressFn={function noRefCheck(){}}
                                            onRemove={function noRefCheck(){}}
                                            onSearch={function noRefCheck(){}}
                                            onSelect={setSelected}
                                            options={options} 
                                            displayValue="values"
                                            placeholder="Programme"
                                          
                                            style={{
                                                chips: {
                                                  background: '#3d1b59'
                                                },
                                                highlightOptions: {
                                                    'background': '#0096fb'
                                                },
                                                searchBox: {
                                                  'border': 'none',
                                                  'border-bottom': '1px solid #3d1b59',
                                                  'border-radius': '0px'
                                                }
                                              }}
                                        />
                                        {field.required && errors[name] && (
                                            <p className="text-red-500">{errors[name]}</p>
                                        )}
                                    </div>
                                ):
                                (
                                    <>
                                {type == "file" && <label className="form-control"><b>{label}</b></label>}
                                    {type !== "disabled" ?
                                        <input
                                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                                            type={type}
                                            name={name}
                                            placeholder={label}
                                            value={ values[name] || ''}
                                            onChange={handleChange}
                                        /> :   <input
                                            className="intro-x login__input form-control py-3 px-4 block mt-4"
                                            type={type}
                                            name={name}
                                            placeholder={label}
                                            value={type == 'file' ? undefined : values[name] || ''}
                                            onChange={handleChange}
                                            disabled
                                        /> 
                                    }
                                        {field.required && errors[name] && (
                                            <p className="text-red-500">{errors[name]}</p>
                                        )}
                                    </>
                                )
                            }
                            </div>
                        );
                        });
                    })}
                
                </div>
            }
            {stepperForm ? <Button /> : 
                <button className="btn btn-primary py-3 px-4 xl:w-32 xl:mr-3 align-top mt-4" type="submit" 
                    disabled={isPending}>{isPending ? 'Submitting' : 'Submit'}
                </button>
            }
        </form>   
        )

    }

export default GenericForm