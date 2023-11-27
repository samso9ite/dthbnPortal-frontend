import CustomSelect, { customMultipleSelect } from "./customSelect";
import {useEffect, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';
import Button from "./stepperButton";
import { useSelector } from "react-redux";
import { indexingData, indexingState, stepperState } from "@/store/indexing-slice";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    clearForm?: () => void
}

const GenericForm:React.FC<Props> = ({fields, onSubmit, initialValues, isPending, span6, stepperForm, clearForm })  => {
    const router = useRouter()
  
    const [values, setValues] = useState<FormValues>(initialValues || {});
    const [errors, setErrors] = useState<Record<string, string>>({})
    let storeFormData = useSelector(indexingData)
    let indexingStatus = useSelector(indexingState)
    let stepper = useSelector(stepperState)
    
    // This updates the initial values on form change
    useEffect(() => { 
        setValues(initialValues || {})
    }, [initialValues])
    
    useEffect(() => {
        // Check if clearForm prop changes and call it
       
    }, [clearForm]);

    useEffect(() => {
        if(indexingStatus == true && router.pathname=='/school/indexing/new' && stepper !== 'profile'){
            console.log(indexingStatus);
            console.log("this triggerednow");
            
            setValues(storeFormData)
            console.log("This triggered");
            
            toast.success("Please Reset all Images", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                theme: "light",
              })
        }
        if (!indexingStatus) {
            console.log("This triggered");
            
            setValues(initialValues || {})
        }
       }, [indexingStatus])
    
    const handleChange = (e:React.ChangeEvent<any>) => {
        let {name, value, files} = e.target;
        let file = files && e.target.files[0]
        
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
    }
        if(fields.find((field) =>  field.name === name && field.required)){
            setErrors((prevErrors) => ({
                ...prevErrors, [name]:''
            }))
        }
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {}
        fields.forEach((field) => {
            if(field.required && !values[field.name]){
                newErrors[field.name] = "This field is required";
            }
        });
        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
        }else{
            setErrors({})
            onSubmit(values)
        }
        
    }
    return(
        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                    options={options} 
                                    selectedValues={values[name] || ''} 
                                    displayValue={name}
                                />
                                {field.required && errors[name] && (
                                 <p className="text-red-500">{errors[name]}</p>
                                )}
                            </div>
                        ):
                        (
                            <>
                           {type == "file" && <label className="form-control"><b>{label}</b></label>}
                                <input
                                    className="intro-x login__input form-control py-3 px-4 block mt-4"
                                    type={type}
                                    name={name}
                                    placeholder={label}
                                    value={type == 'file' ? undefined : values[name] || ''}
                                    onChange={handleChange}
                                />
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
            {stepperForm ? <Button /> : 
                <button className="btn btn-primary py-3 px-4 xl:w-32 xl:mr-3 align-top mt-4" type="submit" 
                    disabled={isPending}>{isPending ? 'Submitting' : 'Submit'}
                </button>
            }
        </form>   
        )

    }

export default GenericForm