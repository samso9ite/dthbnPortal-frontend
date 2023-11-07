import CustomSelect, { customMultipleSelect } from "./customSelect";
import {useEffect, useState} from 'react'
import Multiselect from 'multiselect-react-dropdown';

type Field = {
    name:string;
    type:string;
    options?: {label:string, value:string, }[];
    label: string;
    required?:boolean
}

type FormValues = {
    [key: string]: string | undefined    
}

type Props = {
    fields: Field[];
    onSubmit: (values: FormValues) => void;
    initialValues?: FormValues;
    isPending?: boolean
}

const GenericForm:React.FC<Props> = ({fields, onSubmit, initialValues, isPending})  => {
    const [values, setValues] = useState<FormValues>(initialValues || {});
    const [errors, setErrors] = useState<Record<string, string>>({})
    
    // This updates the initial values on form change
    useEffect(() => {
        setValues(initialValues || {})
    }, [initialValues])
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setValues((prevValues) => ({
            ...prevValues, [name]:value,
        }));

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
        <form onSubmit={handleSubmit}>
            {fields.map((field) => {
                const { name, type, options, label  } = field;
                return(
                    <div key={name}>
                        {type === 'select' && options ? (
                            <div>
                                <select name={name} value={values[name] || ''} className="form-select form-select-lg  sm:mr-2 mt-4" 
                                    onChange={handleChange}>
                                    {options.map((option) => (  
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))
                                
                                    }
                                </select>
                                {field.required && errors[name] && (
                                        <p className="text-red-500">{errors[name]}</p>
                                    )}
                            </div>
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
                            <div>
                            <input
                                className="intro-x login__input form-control py-3 px-4 block mt-4"
                                type={type}
                                name={name}
                                placeholder={label}
                                value={values[name] || ''}
                                onChange={handleChange}
                            />
                            {field.required && errors[name] && (
                                 <p className="text-red-500">{errors[name]}</p>
                             )}
                             </div>
                        )
                    }
                    </div>
                )
            })}

            <button className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top mt-4" type="submit" 
            disabled={isPending}>{isPending ? 'Submitting' : 'Submit'}</button>
            </form>   
        )

    }

export default GenericForm